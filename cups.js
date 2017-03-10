'use strict';
function Cup (name, contents, quantity) {
  this.name = name;
  this.contents = contents;
  this.quantity = quantity;
}

var chocolateMilk = new Cup ('chocolateMilk' , 'coco' , 20);
console.log(chocolateMilk);

Cup.prototype.sellCup = function sellCup (amountSold) {
  this.quantity = this.quantity - amountSold;
};

chocolateMilk.sellCup(5);
console.log(chocolateMilk);

Cup.prototype.changeContents = function changeContents(newContent) {
  this.contents = newContent;
};

// Cup.prototype.changeTemp = function changeAmount(newContent) {
//   this.contents = newContent;
// };

chocolateMilk.changeContents('tea');
console.log(chocolateMilk);

//another constructor
function Dog(name) {
	this.name = name;
	this.talk = function() {
		console.log( this.name + " arf arf!" );
	};
}

let cleo = new Dog("Cleo");
cleo.talk(); //alerts "Cloe says arf!"

let cleo2 = new Dog("Sundown");
cleo2.talk(); //alerts "ginger says arf!"
