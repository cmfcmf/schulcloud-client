// http://localhost:3100/administration/dataprivacy/registration/byparent?student-birthdate=12.01.2000&student-firstname=Adrian&student-secondname=Jost&student-email=adrian.jost@hpi.de&parent-firstname=Uwe&parent-secondname=Jost&parent-email=uwe.jost@hpi.de

/* HELPER */

if (!NodeList.prototype.indexOf) {
    NodeList.prototype.indexOf = function(node) {
        return Array.from(this).indexOf(node);
    };
}
if (!NodeList.prototype.filter) {
    NodeList.prototype.filter = function(fct) {
        return Array.from(this).filter(fct);
    };
}
if (!NodeList.prototype.some) {
    NodeList.prototype.some = function(fct) {
        return Array.from(this).some(fct);
    };
}

/* MULTIPAGE INPUT FORM */

function getMaxSelectionIndex(){
    return document.querySelector(".stages").childElementCount;
}
function getSelectionIndex(){
    var radioButtons = document.querySelectorAll('.form input[type=radio]');
    return radioButtons.indexOf(radioButtons.filter((node)=>{return node.checked;})[0]) + 1;
}
function showInvalid(sectionNr){
    document.querySelector(`section[data-panel="section-${sectionNr}"]`).classList.add("showInvalid");
    document.querySelector(".content-wrapper").scrollTo(0,0);
}
function getSubmitPageIndex(){
    return document.querySelectorAll('form .panels section').indexOf(document.querySelector(`section.submit-page`)) + 1
}
function isSubmitted(){
    return document.querySelector(".form").classList.contains('form-submitted');
}

function setSelectionByIndex(index, event){
    event.preventDefault();
    function setSelection(index){
        document.querySelector('.form input[type="radio"]:nth-of-type(' + index + ')').checked = true;
        updateButton(index);
    }
    function findLatestInvalid(to){
        let i = 1;
        for (; i <= to; i++) {
            if(!isSectionValid(i)){
                return i;
            }
        }
        return to;
    }
    const submitPageIndex = getSubmitPageIndex();
    const submitted = isSubmitted();
    if(submitted){
        if(index > submitPageIndex){
            setSelection(index)
        }else{ //prevent resubmit -> pages before unreachable
            setSelection(submitPageIndex + 1)
        }
    }else{
        index = Math.min(index, submitPageIndex); //prevent skip of submit
        const latestInvalid = findLatestInvalid(index)
        if(latestInvalid >= index){
            setSelection(index);
        }else{
            showInvalid(latestInvalid);
            setSelection(latestInvalid);
        }
    }
}
function updateButton(selectedIndex){
    const submitPage = document.querySelector(`section[data-panel="section-${selectedIndex}"]`).classList.contains('submit-page');
    if(submitPage){
        document.querySelector('#nextSection').innerHTML = document.querySelector('#nextSection').dataset.submitLabel;
    }else{
        document.querySelector('#nextSection').innerHTML = document.querySelector('#nextSection').dataset.nextLabel;
    }

    if(selectedIndex == getMaxSelectionIndex()){
        document.querySelector('.form #nextSection').setAttribute("disabled","disabled");
    }else{
        document.querySelector('.form #nextSection').removeAttribute("disabled");
    }
    if(selectedIndex == 1 || selectedIndex == getSubmitPageIndex()+1){
        document.querySelector('.form #prevSection').setAttribute("disabled","disabled");
    }else{
        document.querySelector('.form #prevSection').removeAttribute("disabled");
    }

    document.querySelector(".content-wrapper").scrollTo(0,0);
}

function isSectionValid(sectionIndex){
    // negation is needed, because some() returns false on a blank array.
    return !document.querySelectorAll(`section[data-panel="section-${sectionIndex}"] input`).some((input)=>{
        return !input.checkValidity();
    });
}

function submitForm(event){
    // TODO - parse date and validate
    if (this.checkValidity()) {
        event.preventDefault();
        const formSubmitButton = document.querySelector('#nextSection');
        formSubmitButton.disabled = true;
        $.ajax({
            url: this.getAttribute("action"),
            method: this.getAttribute("method"),
            data: $(this).serialize(),
            context: this
        }).done(function(response){
            // form submitted
            document.querySelector('.form').classList.add("form-submitted");
            // enable next Button again
            formSubmitButton.disabled = false;
            // go to next page
            setSelectionByIndex(getSelectionIndex()+1, event);
        })
        .fail(function(request){
            // submission failed
            if(request.getResponseHeader("error-message")){
                $.showNotification(request.getResponseHeader("error-message"), "danger");
            }else{
                $.showNotification("Das Absenden des Formulars ist fehlgeschlagen.", "danger");
            }
            // enable next Button again
            formSubmitButton.disabled = false;
        });
    }else{
        $.showNotification("Formular ungültig, bitte füllen Sie alle Felder korrekt aus.", "danger");
    }
}

function nextSection(event){
    const submitPage = document.querySelector(`section[data-panel="section-${getSelectionIndex()}"]`).classList.contains('submit-page');
    if(!submitPage){
        event.preventDefault();
        const selectedIndex = getSelectionIndex() + 1;
        setSelectionByIndex(selectedIndex, event);
    }
    // else: no reaction -> should submit
   
}
function prevSection(event) {
    const selectedIndex = getSelectionIndex() - 1;
    setSelectionByIndex(selectedIndex, event); // don't give this method the event to prevent, to don't prevent on invalid state (back should always be possible)
}
function goToSection(event){
    const selectedIndex = document.querySelectorAll('.form .stages label').indexOf(this) + 1;
    setSelectionByIndex(selectedIndex, event);
}
window.addEventListener('DOMContentLoaded', ()=>{
    // Stepper
    document.querySelectorAll('.form .stages label').addEventListener("click", goToSection);
    document.querySelector('.form #prevSection').addEventListener("click", prevSection);
    document.querySelector('.form #nextSection').addEventListener("click", nextSection);
    document.querySelector('.form').addEventListener("submit", submitForm);
});


/* DATE PICKER */
function triggerInputEvent(currentDateTime){
    var event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });
    this[0].ownerDocument.activeElement.dispatchEvent(event);
}
window.addEventListener('load', ()=>{
    function readPickerConfig(input){
        return {
            format:     (input.dataset.datetime?'d.m.Y H:i':'d.m.Y'),
            mask:       (input.dataset.datetime?'39.19.9999 29:59':'39.19.9999'),
            timepicker: (input.dataset.datetime  || false),
            startDate:  (input.dataset.startDate || false),
            minDate:    (input.dataset.minDate || 'yesterday'), //yesterday is minimum date(for today use 0 or -1970/01/01)
            maxDate:    (input.dataset.maxDate || 'tomorrow'),  //tomorrow is maximum date calendar
            onChangeDateTime: triggerInputEvent
        };
    }
    // https://xdsoft.net/jqplugins/datetimepicker/
    $.datetimepicker.setLocale('de');
    document.querySelectorAll('input[data-date], input[data-datetime]').forEach((input)=>{
        $(input).datetimepicker(readPickerConfig(input));
        input.setAttribute("autocomplete","off");
        // modified regex from: https://www.regextester.com/97612
        let pattern =`(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.((?:19|20)[0-9]{2})`;
        if(input.dataset.datetime){ pattern += `[[:space:]][0-2][0-3]:[0-5][0-9]`; }
        input.setAttribute("pattern", pattern);
    });
});

/* apply input from query */
var getQueryParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};
window.addEventListener('DOMContentLoaded', ()=>{
    const params = getQueryParams(window.location.href);
    for(let key in params){
        const value = params[key];
        try{
            document.querySelectorAll(`input[name="${key}"]`).forEach((input) => {
                input.value = value;
                var event = new Event('input', {
                    'bubbles': true,
                    'cancelable': true
                });
                input.dispatchEvent(event);
            });
        }catch(error){
            console.error(`Element: 'input[name="${key}"]' not found`);
        }
    };
});

/* OTHER STUFF */
window.addEventListener('load', ()=>{
    // INSERT CUSTOM SCRIPTS HERE
    
});