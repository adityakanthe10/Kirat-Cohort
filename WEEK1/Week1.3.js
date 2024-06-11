// Classes

class Animal {
  constructor(name, legcount, speaks) {
    this.name = name;
    this.legcount = legcount;
    this.speaks = speaks;
  }
  speak() {
    console.log("hi there" + this.speaks);
  }
}

let dog = new Animal("lion", 4, "raww raww");

dog.speak();
