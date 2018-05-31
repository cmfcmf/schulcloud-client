const _ = require('lodash');
const express = require('express');
const router = express.Router();
const api = require('../api');
const authHelper = require('../helpers/authentication');


const listWorksheets = function(req, res, next) {
  api(req).get('/worksheet/', {
    qs: {}
  }).then(worksheets => {
    if (req.query.json) {
      res.json(worksheets);
    } else {
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
      title: 'Neues Arbeitsblatt',
      content: []
    }
  }).then(result => {
    res.redirect('/material/edit/' + result._id)
  });
}

const editWorksheet = (req, res, next) => {
  res.render('material/edit-worksheet', {
      title: 'Blatt bearbeiten',
      worksheet_api: `../api`,
      worksheet_id: req.params.id
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

// secure routes
router.use(authHelper.authChecker);

router.get('/', listWorksheets);
router.get('/add/', createWorksheet);
router.get('/edit/:id', editWorksheet);

// editor API
router.get('/api/:id', loadWorksheet);
router.patch('/api/:id', saveWorksheet);


module.exports = router;