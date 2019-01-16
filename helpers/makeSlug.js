module.exports = function() {
  return arguments[0].toString().toLowerCase().replace(/ /g, '-');
};