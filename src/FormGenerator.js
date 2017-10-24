//Form creation tool
module.exports.generateForm = function(input){
  //String variable to hold final form render
  var formStringHTML = '';

  //For each data in input array
  input.forEach(function(input){
    //Switch to determine & handle specific input type
    switch(input.type){
      //LABEL
      case 'label':
        formStringHTML += '<label';
        //Add 'for' attribute if ID is avail
        input.id ? formStringHTML += ' for="' + input.id + '"></label>' : formStringHTML += '></label>';

        break;

      //TEXT
      case 'text':
        //BEGIN Input
        formStringHTML += '<input type="text"';

        //ADD Attributes if present
        input.name ? formStringHTML += ' name="' + input.name + '"' : formStringHTML += '';
        input.id ? formStringHTML += ' id="' + input.id + '"' : formStringHTML += '';
        input.class ? formStringHTML += ' class="' + input.class + '"' : formStringHTML += '';
        input.value ? formStringHTML += ' value="' + input.value + '"' : formStringHTML += '';
        input.required ? formStringHTML += ' required' : formStringHTML += '';

        //END Input
        formStringHTML += '/>';

        break;

      //EMAIL
      case 'email':
        //BEGIN Input
        formStringHTML += '<input type="email"';

        //ADD Attributes if present
        input.name ? formStringHTML += ' name="' + input.name + '"' : formStringHTML += '';
        input.id ? formStringHTML += ' id="' + input.id + '"' : formStringHTML += '';
        input.class ? formStringHTML += ' class="' + input.class + '"' : formStringHTML += '';
        input.value ? formStringHTML += ' value="' + input.value + '"' : formStringHTML += '';
        input.required ? formStringHTML += ' required' : formStringHTML += '';

        //END Input
        formStringHTML += '/>';

        break;

      //PASSWORD
      case 'password':
        //BEGIN Input
        formStringHTML += '<input type="password"';

        //ADD Attributes if present
        input.name ? formStringHTML += ' name="' + input.name + '"' : formStringHTML += '';
        input.id ? formStringHTML += ' id="' + input.id + '"' : formStringHTML += '';
        input.class ? formStringHTML += ' class="' + input.class + '"' : formStringHTML += '';
        input.value ? formStringHTML += ' value="' + input.value + '"' : formStringHTML += '';
        input.required ? formStringHTML += ' required' : formStringHTML += '';

        //END Input
        formStringHTML += '/>';

        break;

      //SUBMIT
      case 'submit':
        //BEGIN Input
        formStringHTML += '<input type="submit"';

        //ADD Attributes if present
        input.name ? formStringHTML += ' name="' + input.name + '"' : formStringHTML += '';
        input.id ? formStringHTML += ' id="' + input.id + '"' : formStringHTML += '';
        input.class ? formStringHTML += ' class="' + input.class + '"' : formStringHTML += '';
        input.value ? formStringHTML += ' value="' + input.value + '"' : formStringHTML += '';

        //END Input
        formStringHTML += '/>';

        break;

      //IF NONE OF ABOVE TYPES APPLY
      case 'default':
        //Show error
        console.log('Invalid input type: '+ input.type +'. Choose from "label", "text", "email", "password", and "submit" and do not leave blank.');

        break;
    }
  });
  //RETURN form string
  return formStringHTML;
}
