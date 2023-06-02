module.exports = { validation };

function validation(message) {
  if (message) {
    return `<span style="color: red">${message}</span>`;
  } else {
    return '';
  }
}
