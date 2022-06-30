const ftoc = function(f) {
  if (typeof f !== "number") return("ERROR");
  return parseFloat(((f - 32) * 5/9).toFixed(1));
};

const ctof = function(c) {
  if (typeof c !== "number") return("ERROR");
  return parseFloat(((c * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
