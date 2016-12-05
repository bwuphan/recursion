// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  function traverse(node){
  	let kidNodes = node.childNodes;
  	for(let i = 0; i < kidNodes.length; i++){
  		let thisNode = kidNodes[i];
  		if(thisNode.classList && thisNode.classList.contains(className)){
  			classMatch.push(thisNode);
  		}
  		if(thisNode.childNodes[0]){
  			traverse(thisNode)
  		}
  	}

  }
  let classMatch = [];
  traverse(document);
  return classMatch;
};
