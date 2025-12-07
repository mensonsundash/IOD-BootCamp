class Animal {
  constructor(name){
    this.speed = 0;
    this.name = name;
  }

  run(speed){
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`)
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stand stills.`)
  }
}

class Rabbit extends Animal {
  //constructor overriding
  constructor(name, earLength){

  }

  //method overriding
  stop() {
    super.stop();//calls parent stop() method
    this.hide();
  }

  //custom methods also inherits from parent
  hide() {
    console.log(`${this.name} hides.`)
  }

  
}

let bunny = new Rabbit('bunny');

bunny.run(12);
bunny.stop();