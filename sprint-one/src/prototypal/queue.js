var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {}; 

  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
	let firstIndex = Object.keys(this.storage)[0]; 
	this.storage[firstIndex+this.size()] = value;
};
queueMethods.dequeue = function() {
    let element =this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    return element;
};

queueMethods.size = function() {

	return Object.keys(this.storage).length;
};
