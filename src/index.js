//TEST FORM BUILDER
var formGen = require('./FormGenerator.js');
var testInputs =[{
  type: 'label',
  name: 'label-name',
  id: 'label-id',
  class: 'label-class',
  value: 'label-value',
  required: false
},{
  type: 'text',
  name: 'text-name',
  id: 'text-id',
  //no CLASS
  value: 'text-value',
  required: true
},{
  type: 'email',
  name: 'email-name',
  //no ID
  class: 'email-class',
  value: 'email-value',
  required: true
},{
  type: 'password',
  name: 'password-name',
  id: 'password-id',
  class: 'password-class',
  //no VALUE
  required: true
},{
  type: 'submit',
  name: 'submit-name',
  id: 'submit-id',
  class: 'submit-class',
  value: 'submit-value',
  //no REQUIRE
}]

console.log('Form HTML Output: ', formGen.generateForm(testInputs));
