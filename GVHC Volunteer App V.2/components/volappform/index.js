'use strict';

app.volappform = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_volappform
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_volappform
(function(parent) {
    var volappformModel = kendo.observable({
        fields: {
            certification1: 'By pressing the Confirm button, I certify that the information contained on this application form is true, correct and complete to the best of my knowledge. I understand that any false or incomplete information may be grounds for disqualification or separation. In addition, I understand that a thorough reference checking process will occur and hereby authorize Golden Valley Health Centers to make inquiries regarding my education, work experience and references, unless otherwise stated. I hereby release all parties and persons associated with any such inquiries from liability in connection with information they provide. I understand that certain positions may require background checks including a request for criminal history information. I have read and understand the information on this application.',
            certification: '',
            selfidentification: '',
            impairment: 'You are considered to have a disability if you have a physical or mental impairment or medical condition that substantially limits a major life activity, or if you have a history or record of such an impairment or medical condition. Please state any:',
            disability: '',
            notprotect: '',
            protectedveteran: '',
            veteran: 'Invitation to Self-Identify Veteran Status',
            notprovide: '',
            white: '',
            hawaiian: '',
            black: '',
            asian: '',
            americanindian: '',
            hispanic: '',
            race: 'Please answer the question below and select the racial categories that apply to you.',
            sex: '',
            backgroundrules: 'Submission of this information is voluntary. Refusal to complete this section will not subject any applicant for employment or any employee to adverse treatment. This information will be maintained separately in a confidential file, will not be used in consideration for your employment, and will not be seen by the hiring manager or search committees.',
            background: '',
            employment1: '',
            instructions: 'Please enter your employment/internship/volunteer history for the past 5 years. Please begin with your current or most recent position. <br /><br />Please follow this format:<br /><br />Employer Name, Employment Date, Position and duties<br /><br />Ex. Golden Valley Health Centers, Oct 2014-Jan 2015, Filing Assistant- filing, typing',
            employment: '',
            expdate: '',
            plstate: '',
            licensenumber: '',
            description: '',
            certificates: '',
            major: '',
            degree: '',
            schoolname: '',
            education: '',
            suntime: '',
            sunday: '',
            sattimes: '',
            saturday: '',
            ftimes: '',
            friday: '',
            thtimes: '',
            thursday: '',
            wtime: '',
            wednesday: '',
            ttime: '',
            tuesday: '',
            mtime: '',
            monday: '',
            avail: '',
            lazipcode: '',
            lastate: '',
            lacity: '',
            lastreet2: '',
            lastreet1: '',
            localadd: '',
            alttel: '',
            cell: '',
            lname: '',
            mname: '',
            name: '',
            contactinformation: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('volappformModel', volappformModel);
})(app.volappform);

// START_CUSTOM_CODE_volappformModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_volappformModel