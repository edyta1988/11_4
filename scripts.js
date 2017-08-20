function Phone(brand, price, color, country) {
  this.brand = brand;
   this.price = price;
  this.color = color;
  this.country = country;
}

Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the phone produced in " + this.country + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "usa");
var SamsungGalaxyS6 = new Phone("Galaxy", 1850, "black", "japan");
var OnePlusOne = new Phone("One", 1900, "black", "china");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
