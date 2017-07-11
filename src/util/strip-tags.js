exports.strip = function(str, tag) {
  var dummyNode = document.createElement("DIV")
  dummyNode.innerHTML = str
  let targetNode = dummyNode.querySelector(tag)
  if (targetNode) {
    dummyNode.removeChild(targetNode)
  }
  
  return dummyNode.innerHTML
};

exports.fetch = function(str, tag) {
  var dummyNode = document.createElement("DIV")
  dummyNode.innerHTML = str

  return dummyNode.querySelector(tag)
    ? dummyNode.querySelector(tag).innerHTML
    : ""
};
