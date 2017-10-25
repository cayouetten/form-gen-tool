//TEST FORM BUILDER
var formGen = require('./FormGenerator.js');
var testInputs =[{
  type: 'label',
  name: 'label-name',
  for: 'label-for',
  id: 'label-id',
  class: 'label-class',
  value: 'label-value',
  //no REQUIRE
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
},{
  type: 'no-type',
  name: 'dummy-name',
  //no ID
  class: 'dummy-class',
  //no VALUE
  required: false
},{
  type: 'TEXT',
  name: 'text-capital-name',
  id: 'text-capital-id',
  class: 'text-capital-class',
  //no VALUE
  required: true
}]

console.log('Form HTML Output: ', formGen.generateForm(testInputs));
