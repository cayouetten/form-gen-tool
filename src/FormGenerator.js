// Form creation tool
module.exports.generateForm = ((inputs) => {
  // String variable to hold final form render
  let formStringHTML = '';

  // For each data in input array
  inputs.forEach((input) => {
    // Switch to determine & handle specific input type
    switch (input.type.toLowerCase()) {
      // LABEL
      case 'label':
        // BEGIN output
        formStringHTML += '<label';

        // ADD attributes if present
        formStringHTML += input.for ? ` for="${input.for}"` : '';
        formStringHTML += input.name ? ` name="${input.name}"` : '';
        formStringHTML += input.id ? ` id="${input.id}"` : '';
        formStringHTML += input.class ? ` class="${input.class}"` : '';
        formStringHTML += input.value ? ` value="${input.value}"` : '';

        // END output
        formStringHTML += '></label>';

        break;

      // TEXT
      case 'text':
        formStringHTML += '<input type="text"';

        formStringHTML += input.name ? ` name="${input.name}"` : '';
        formStringHTML += input.id ? ` id="${input.id}"` : '';
        formStringHTML += input.class ? ` class="${input.class}"` : '';
        formStringHTML += input.value ? ` value="${input.value}"` : '';
        formStringHTML += input.required ? ' required "' : '';

        formStringHTML += '/>';

        break;

      // EMAIL
      case 'email':
        formStringHTML += '<input type="email"';

        formStringHTML += input.name ? ` name="${input.name}"` : '';
        formStringHTML += input.id ? ` id="${input.id}"` : '';
        formStringHTML += input.class ? ` class="${input.class}"` : '';
        formStringHTML += input.value ? ` value="${input.value}"` : '';
        formStringHTML += input.required ? ' required "' : '';

        formStringHTML += '/>';

        break;

      // PASSWORD
      case 'password':
        formStringHTML += '<input type="password"';

        formStringHTML += input.name ? ` name="${input.name}"` : '';
        formStringHTML += input.id ? ` id="${input.id}"` : '';
        formStringHTML += input.class ? ` class="${input.class}"` : '';
        formStringHTML += input.value ? ` value="${input.value}"` : '';
        formStringHTML += input.required ? ' required "' : '';

        formStringHTML += '/>';

        break;

      // SUBMIT
      case 'submit':
        formStringHTML += '<input type="submit"';

        formStringHTML += input.name ? ` name="${input.name}"` : '';
        formStringHTML += input.id ? ` id="${input.id}"` : '';
        formStringHTML += input.class ? ` class="${input.class}"` : '';
        formStringHTML += input.value ? ` value="${input.value}"` : '';
        formStringHTML += input.required ? ' required "' : '';

        formStringHTML += '/>';

        break;

      // IF NONE OF ABOVE TYPES APPLY
      default:
        // Show error
        // Ignore console.log fail for this app's purposes
        // eslint-disable-next-line no-console
        console.log(`Invalid input type: "${input.type}". Choose from "label", "text", "email", "password", and "submit" and do not leave blank.`);

        break;
    }
  });
  // RETURN form string
  return formStringHTML;
});
