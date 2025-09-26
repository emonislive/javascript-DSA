class Cookie {
  #color; // * by default constructor variables are public so to make it private #variable_name is used;
  constructor(color) {
    this.#color = color;
  }
  getColor() {
    return this.#color;
  }
  setColor(color) {
    this.#color = color;
  }
}

const object_1 = new Cookie("Red");
const object_2 = new Cookie("White");

console.log(object_1.getColor());
object_2.setColor("Yellow");
console.log(object_2.getColor());
