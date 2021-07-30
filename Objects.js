let user = {
    firstname: 'Vasya',
    age: 32
}
console.log(user)





let cat = {
    tailLength: 20
    }   
      cat.sayMeow = function(){
      return "Meow"
    }

console.log(cat)
console.log(cat.sayMeow())


let jiraffe = {
  age: 20,
  weight: 300,
  sleeping: false,
  torsoHeight:200,
  neckLength: 100,
  growth: function()
  {
      return (this.torsoHeight + this.neckLength)
  },
  asleep: function(){
      return this.sleeping = !this.sleeping 
  }
}

console.log(jiraffe)
console.log(jiraffe.growth())
console.log(jiraffe.asleep())
;


    let moto = function(model, modelEngine, tankSize, seats, speed ) {

    this.model = model;
    this.modelEngine = modelEngine;
    this.tankSize = tankSize;
    this.seats = seats;
    this.speed = speed;
    this.speedIncrease = function (km){
      return (this.speed = this.speed + km)
    }
    this.speedDecrease = function (km){
        return (this.speed = this.speed - km)
    }
    this.speedStop = function (km){
        return (this.speed = 0)
      }
  

    this.AvailableMemory = function() {
      console.log('Модель мотоцикла : ' + this.model);
      console.log('Модель двигателя : ' + this.modelEngine);
      console.log('Количество мест: ' + this.seats);
      console.log('Обьем бака : ' + this.tankSize);
      console.log('Скорость : ' + this.speedIncrease(100));
      

    };
   };
   let moto1 = new moto('Yamaha','F6', 2, 19, 0);
   
   

   moto1.AvailableMemory();

  
