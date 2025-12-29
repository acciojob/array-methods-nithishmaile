Array.prototype.myMap = function(callback) {
    if(typeof callback!=="function"){
		return new Error("Please provide callback")
	}
	if(this.length==0){
		return []
	}

	let newArray=[]

	for(let i=0;i<this.length;i++){
		newArray.push(callback(this[i],i,this))
	}


	return newArray
  };
  
  Array.prototype.myFilter = function(callback) {
	  if(typeof callback!=="function"){
		return new Error("Please provide callback")
	  }
	  if(this.length==0){
		return []
	 }

	  let newArray=[]

	  for(let i=0;i<this.length;i++){
		  newArray.push(callback(this[i],i,this))
	  }

	  return newArray
  };
  
  Array.prototype.myReduce = function(callback, initialValue) {
	  if(typeof callback!==function){
		return new Error("Please provide callback")
	}
	if(this.length==0){
		return []
	}

	  let accumulator=initialValue;
	  let startIndex=0

	  if(accumulator==undefined){
		  accumulator=this[0]
		  startIndex=1
	  }

	for(let i=0;i<this.length;i++){
		accumulator=callback(accumulator,this[i],i,this)
	}
  };
  
  
module.exports = Array.prototype;
