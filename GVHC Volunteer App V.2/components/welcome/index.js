'use strict';

app.welcome = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_welcome
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_welcome
(function(parent) {
    var welcomeModel = kendo.observable({
        fields: {
            welcomeParagraph: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('welcomeModel', welcomeModel);
})(app.welcome);

// START_CUSTOM_CODE_welcomeModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_welcomeModel