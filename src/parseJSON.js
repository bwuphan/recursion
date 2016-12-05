// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if(json === "undefined"){
  	return undefined;
  }
  if(json === "false"){
  	return false;
  }
  if(json === "true"){
  	return true;
  }
  if(json === "null"){
  	return null;
  }
  if(json === "[Function: fn]"){
  	throw new SyntaxError('SyntaxError');
  }
  if(json[0] === "["){
  	if(json[json.length - 1] === "]"){
  		let array = [];
  		let parsedArray = json.slice(1, json.length - 1).split(',');
  		for(let i = 0; i < parsedArray.length; i++){
  			array.push(parseJSON(parsedArray[i]))
  		}
  		return array;
  	} else {
  		throw new SyntaxError('SyntaxError');
  	}
  }
  if(json[0] === "{"){
  	let object = {};
  	let objArray = json.slice(1, json.length - 1).split(',');
  	for(let i = 0; i < objArray.length; i++){
  		let colonIndex = objArray[i].indexOf(":");
  		let tempKey = parseJSON(objArray[i].slice(0, colonIndex));
  		let tempVal = parseJSON(objArray[i].slice(colonIndex + 1, objArray[i].length));
  		object[tempKey] = tempVal
  	}
  	return object;
  }
  if(isNaN(json)){
  	return json.slice(1, json.length - 1);
  } else {
  	return parseInt(json)
  }
};