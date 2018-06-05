const _ = require('lodash');
const express = require('express');
const router = express.Router();
const api = require('../api');
const authHelper = require('../helpers/authentication');
const ltiHelper = require('../helpers/ltiCustomer');


const listWorksheets = function(req, res, next) {
  api(req).get('/worksheet/', {
    qs: {}
  }).then(({data}) => {
    if (req.query.json) {
      res.json(data);
    } else {
      const worksheets = data.map(worksheet => {
        worksheet.url = 'edit/' + worksheet._id;
        worksheet.secondaryTitle = `${worksheet.content.length} Blöcke`;
        worksheet.background = '#b10438';
        worksheet.content = '';
        return worksheet;
      });

      res.render('material/overview', {
        title: 'Meine Arbeitsblätter',
        worksheets
      });
    }
  });
}

const createWorksheet = (req, res, next) => {
  api(req).post('/worksheet/', {
    json: {
      title: 'Neues Arbeitsblatt ' + Date.now(),
      content: []
    }
  }).then(result => {
    res.redirect('/material/edit/' + result._id)
  });
}

const editWorksheet = (req, res, next) => {
  // TODO: read users pseudonym
  // let currentUser = res.locals.currentUser;
  // Promise.all([
  //   api(req).get('/ltiTools/' + req.params.ltiToolId),
  //   api(req).get('/roles/' + currentUser.roles[0]._id),
  //   api(req).get('/pseudonym?userId=' + currentUser._id + '&toolId=' + req.params.ltiToolId)
  // ]).then(([tool, role, pseudonym]) => {
  //   let customer = new ltiCustomer.LTICustomer();
  //   let consumer = customer.createConsumer(tool.key, tool.secret);
  //   let user_id = pseudonym.data[0].token; // use provider specific pseudonym instead of user_id
  //   let payload = {
  //     lti_version: tool.lti_version,
  //     lti_message_type: tool.lti_message_type,
  //     resource_link_id: tool.resource_link_id || req.params.courseId,
  //     roles: customer.mapSchulcloudRoleToLTIRole(role.name),
  //     launch_presentation_document_target: 'window',
  //     launch_presentation_locale: 'en',
  //     // lis_person_name_full: currentUser.displayName || `${currentUser.firstName} ${currentUser.lastName}`,
  //     // lis_person_contact_email_primary: currentUser.username ? `${currentUser.username}@schul-cloud.org` : 'jbaird@uni.ac.uk',
  //     user_id
  //   };
  // });

  res.render('material/edit-worksheet', {
      title: 'Blatt bearbeiten',
      worksheet_api: `../api`,
      worksheet_id: req.params.id,
      lti_base_url: '../../courses/X/tools/run/'
  });
};

const loadWorksheet = (req, res, next) => {
  api(req).get('/worksheet/' + req.params.id).then(result => {
    res.send(result);
  });
}

const saveWorksheet = (req, res, next) => {
  api(req).patch('/worksheet/' + req.params.id, { json: req.body }).then(result => {
    res.send(result)
  });
}

const getLtiRequest = (req, res, next) => {
  const currentUser = res.locals.currentUser;
  Promise.all([
    api(req).get('/ltiTools/' + req.params.id),
    api(req).get('/roles/' + currentUser.roles[0]._id),
    api(req).get('/pseudonym?userId=' + currentUser._id + '&toolId=' + req.params.id)
  ]).then(([tool, role, pseudonym]) => {
    const customer = new ltiHelper.LTICustomer();
    const consumer = customer.createConsumer(tool.key, tool.secret);
    const payload = {
      lti_version: tool.lti_version,
      lti_message_type: tool.lti_message_type,
      resource_link_id: tool.resource_link_id || req.params.courseId,
      roles: customer.mapSchulcloudRoleToLTIRole(role.name),
      launch_presentation_document_target: 'window',
      launch_presentation_locale: 'en',
      userId: pseudonym.data[0].token
    };
    tool.customs.forEach((custom) => {
      payload[customer.customFieldToString(custom)] = custom.value;
    });

    let request_data = {
      url: tool.url,
      method: 'POST',
      data: payload
    };

    res.send(consumer.authorize(request_data));
  });
}

// secure routes
router.use(authHelper.authChecker);

router.get('/', listWorksheets);
router.get('/add/', createWorksheet);
router.get('/edit/:id', editWorksheet);

// editor API
router.get('/api/:id', loadWorksheet);
router.patch('/api/:id', saveWorksheet);
router.get('/lti/:id', getLtiRequest);

module.exports = router;