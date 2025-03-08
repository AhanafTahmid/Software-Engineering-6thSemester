class Shape {
    calculate_area() {
      //...
    }
  }

  class Drawable {
    draw(){
      //...
    }
  }

  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculate_area() {
      return 3.1416 * this.radius * this.radius;
    }

    draw() {
      console.log(`Drawing a circle with radius ${this.radius}`);
    }
  }
   
    class Rectangle extends Shape {
      constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
      }
   
      calculate_area() {
        return this.width * this.height;
      }
      draw() {
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}`);
    }
  }
   
    let circle = new Circle(5);
    let rectangle = new Rectangle(4, 6);
   
    console.log("Circle ");
    circle.draw();
    console.log(circle.calculate_area()); 
   
    console.log("Reactangle ");
    rectangle.draw();
    console.log(rectangle.calculate_area());

