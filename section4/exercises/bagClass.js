class Bags {
  constructor(material, size, numberOfPockets, contents) {
    this.material = material;
    this.size = size;
    this.numberOfPockets = numberOfPockets;
    this.contents = contents;
  }
  breakZipper() {
    this.numberOfPockets = this.numberOfPockets - 1;
  }
  addContents(newItem) {
    this.contents.push(newItem);
  }
}

var hikingBackpack = new Bags(
  "polyester",
  "Medium",
  5,
  ["snacks", "camelback", "flashlight"]
);

var laptopBackpack = new Bags(
  "canvas",
  "large",
  4,
  ["laptop", "pens", "headphones"]
);

var fannyPack = new Bags(
  "polyester",
  "small",
  1,
  ["wallet", "mask", "sunglasses"]
);

hikingBackpack.breakZipper();
fannyPack.addContents("chapstick"); 

console.log(hikingBackpack);
console.log(laptopBackpack);
console.log(fannyPack);
