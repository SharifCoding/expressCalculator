/* eslint prefer-destructuring: 0 */

// SUBTRACTION FUNCTION
const subtract = (request, response) => {
  const number1 = parseFloat(request.params.number1);
  const number2 = parseFloat(request.params.number2);

  response.send({ number: number1 - number2 });
};

  // VARIABLES EXPORTED
module.exports = subtract;

