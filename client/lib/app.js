angular.module('forgottenMore', ['angular-meteor', 'ui.router', 'ngAnimate', 'accounts.ui', 'ui.bootstrap']);

Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'fullName',
        fieldLabel: 'First and Last',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        }
    }, /*{
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
    },*/
    {
        fieldName: 'title',
        fieldLabel: 'Title (if Expert)',
        inputType: 'text',
        visible: true,
    },
    {
        fieldName: 'church',
        fieldLabel: 'Church',
        inputType: 'text',
        visible: true,
    },   
    {
        fieldName: 'denomination',
        fieldLabel: 'Denomination',
        inputType: 'text',
        visible: true,
    }, 
    {
        fieldName: 'city',
        fieldLabel: 'City',
        inputType: 'text',
        visible: true,
    },   
        {
        fieldName: 'gender',
        showFieldLabel: false,      // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Gender',
        inputType: 'radio',
        radioLayout: 'vertical',    // It can be 'inline' or 'vertical'
        data: [{                    // Array of radio options, all properties are required
    		id: 1,                  // id suffix of the radio element
            label: 'Male',          // label for the radio element
            value: 'm'              // value of the radio element, this will be saved.
          }, {
            id: 2,
            label: 'Female',
            value: 'f',
            checked: 'checked'
        }],
        visible: true
    }, {
        fieldName: 'user-role',
        fieldLabel: 'User Role',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Please select your role',
        data: [{
            id: 1,
            label: 'User',
            value: 'us'
          }, {
            id: 2,
            label: 'Expert',
            value: 'ex',
        },
            {
            id: 3,
            label: 'Content Add',
            value: 'co',
        }  ],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});