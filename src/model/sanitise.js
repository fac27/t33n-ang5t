module.exports = { sanitise };

function sanitise(dirtyData) {
  const riskInputs = {
    '<': '&lt;',
    '>': '&gt;',
  };
  const cleanData = dirtyData.replace(/<||>/gi, (match) => riskInputs[match]);
  console.log(cleanData);
  return cleanData;
}
