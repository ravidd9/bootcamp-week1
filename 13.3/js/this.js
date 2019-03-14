//1
// const person = {
//   hungry: true,
//   feed: function () {
//     if (this.hungry) { //added this.
//       hungry = false;
//       console.log('Im no longer hungry!')
//     }
//   }
// }
// person.feed() //should alert "I'm no longer hungry"


//2
// const pump = function (amount) {
//   this.liters += amount; //added this.
//   console.log('You put ' + amount + ' liters in ' + this.name); //removed this. from amount
// };
// const garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump
//   }
// };
// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);
// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);


//3
const pumpFuel = function (plane) {
  plane.fuel += 1;
}
const airplane = {
  fuel: 0, //added key and value
  fly: function () {
    if (this.fuel < 2) { //added this.
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
}
console.log('The plane should not be able to fly (yet): ' + airplane.fly());
pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());
pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());


//4
// const tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },
//   stealCoins: function(num){ //added this method
//     this.coinCount-=num
//   }
// };
// tipJar.tip();
// console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
// tipJar.stealCoins(3);
// console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
// tipJar.stealCoins(10);
// console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


//5
// const revealSecret = function (person) { //added person
//   return person.secret; //added person.
// };
// const shoutIt = function (person, secret) { //func->secret
//   person.revealItAll = secret; //func->secret
//   const result = person.revealItAll; //removed ()
//   console.log(person.name + " said: " + result); //added + before result
// };
// const avi = {
//   name: "Avi", //added ,
//   secret: "Im scared of snakes!"
// };
// const narkis = {
//   name: "Narkis", //added ,
//   secret: "I dont have secrets because I'm zen like that."
// };
// shoutIt(avi, revealSecret(avi)); //added(avi)
// shoutIt(narkis, revealSecret(narkis)); //added (avi)


//6
// const coffeeShop = {
//   beans: 40,
//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },
//   makeDrink: function (drinkType) {
//     let drinks = Object.keys(this.drinkRequirements)
//     for(let index in drinks){
//       if(drinks[index] == drinkType) {
//         if(this.beans >= this.drinkRequirements[drinkType]){
//           this.beans-=this.drinkRequirements[drinkType]
//           console.log("your " + drinkType + " is ready!")
//           console.log("remaining beans: " + this.beans)
//           return
//         }
//         else{
//           console.log("Sorry, we're all out of beans!")
//           return
//         }
//       }
//     }
//     console.log("Sorry, we don't make " + drinkType)
//   }
// }
// coffeeShop.makeDrink("latte"); 
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


//6.1
const coffeeShop = {
  beans: 40,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
    
  },
  makeDrink: function (drinkType) {
    let drinks = Object.keys(this.drinkRequirements)
    let isExist = false
    let isEnoughBeans = false
    for(let index in drinks){
      if(drinks[index]==drinkType){
        isExist = true;
      }
      if(this.beans >= this.drinkRequirements[drinkType]){
        isEnoughBeans = true
      }
    }
    if(isExist && isEnoughBeans){
      this.beans-=this.drinkRequirements[drinkType]
      console.log("your " + drinkType + " is ready!")
      console.log("remaining beans: " + this.beans)
    }
    else if(isExist && !isEnoughBeans){
      console.log("Sorry, we're all out of beans!")
    }
    else{
      console.log("Sorry, we don't make " + drinkType)
    }
  }
}
coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
