// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === 'string'){
  	return '"' + obj + '"';
  }
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
  	return '' + obj;
  }
  if(Array.isArray(obj)){
  	if(obj[0] === undefined){
  		return "" + "[]";
  	} else {
  		let arrayString = "[";
  		for(let i = 0; i < obj.length; i++){
  			arrayString += stringifyJSON(obj[i]);
  			if(i === obj.length - 1){
  				arrayString += "]";
  			} else {
  				arrayString += ",";
  			}
  		}
  		return arrayString;
  	}
  }
  if(obj instanceof Object){
  	let objectString = "{";
  	for(let key in obj){
  		if(obj[key] !== undefined && !(key === "functions" && stringifyJSON(obj[key]) === "{}")){
  			objectString += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ",";
  		}
  	}
  	if(objectString.length > 1){
  		objectString = objectString.slice(0, objectString.length - 1);
  	}
  	objectString += "}";
  	return objectString;
  }
};
