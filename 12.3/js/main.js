// let myStuff= ["one", "two", "three"]
// console.log(myStuff[1])


// const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// console.log("the first plant is: " + plants[0] + " and the last plat is:" + plants[plants.length -1])


// let myStuff= ["one", "two", "three"]
// myStuff.push(myStuff[0])
// myStuff.unshift(myStuff[myStuff.length-2])
// console.log(myStuff)


// let myStuff = ["a", "b", "c"]
// myStuff.push(...myStuff)
// console.log(myStuff)


// let array = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
// array.splice(0, array.length-1)
// console.log(array)


// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
// let newg = []
// newg.push(genes[0], genes[1])
// newg.push(genes[4])
// newg.push(genes[2])
// newg.push(genes[3], genes[3])
// newg.unshift("FXT")
// console.log(newg)


// let car = {
//   color: "yellow",
//   numWheels: 4,
//   isFancy: true
// }
// let fancy
// if (car.isFancy){
//   fancy = "it is fancy"
// }
// else{
//   fancy = "it is not fancy"
// }
// console.log("the " + car.color + " car has " + car.numWheels + " wheels. " + fancy)


// let man = {
//   item: "pen",
//   toBeggining: true,
//   items: ["a", "b"]
// }
// if(man.toBeggining){
//   man.items.unshift(man.item)
// }
// else{
//   man.items.push(man.item)
// }
// console.log(man.items)


// const human = {
//     age: 0
// }
// const babyNameKey = "name"
// const babyNameValue = "Goojibear"
// human[babyNameKey] = babyNameValue
// console.log(human)


// 1
//   let p1 = {
//     name: "moshe",
//     age: 25,
//     city: "netanya"
//   }
//   let p2 = {
//     name: "yossi",
//     age: 26,
//     city: "kiryat ono"
//   }
//   if(p1.age == p2.age){
//     if(p1.city == p2.city){
//       console.log(p1.name + " wants to date " + p2.name)
//     }
//     else{
//       console.log(p1.name + " wants to date " + p2.name + ", but couldn't")
//     }
//   }
//   else{
//     console.log("not the same age")
//   }


//2
// let myList = [
//   {name: "ravid", age: 25},
//   {name: "yossi", age: 26}
// ]
// myList[0].age++
// myList.splice(1,1)
// console.log(myList)


//3
// let myList = [
//   {name: "ravid", age: 25},
//   {name: "yossi", age: 26}
// ]
// let otherList = [
//   {name: "reuven", age: 27},
//   {name: "israel", age: 28}
// ]
// myList.push(...otherList)
// console.log(myList)


//4
// let myList = [
//   {name: "ravid", age: 25},
//   {name: "yossi", age: 26}
// ]
// let library = {
//   books:[
//     {title: "abc", author: "ravid"},
//     {title: "efg", author: "yossi"},
//   ]
// }
// myList.push(...library.books)
// console.log(myList)


//5
// const reservations = {
//   bob: { claimed: false },
//   ted: { claimed: true }
// }
// const name = "Ted"
// if(reservations[name.toLowerCase()] && !reservations[name.toLowerCase()].claimed){
//   console.log("welcome " + name)
// }
// if(reservations[name.toLowerCase()] && reservations[name.toLowerCase()].claimed){
//   console.log("Hmm, someone already claimed this reservation Mr." + name)
// }
// if(!reservations[name.toLowerCase()]){
//   console.log("you have no reservations, let me add one Mr." + name)
//   reservations[name.toLowerCase()] = {claimed: true}
// }
// console.log(reservations)


//extension
// const date = 3
// const kitchen = {
//     owner: "Geraldine",
//     hasOven: true, // choose one
//     fridge: {
//         price: 500,
//         works: false, // choose one
//         items: [
//             { name: "cheese", expiryDate: 7 },
//             { name: "raddish", expiryDate: 2 },
//             { name: "bread", expiryDate: 1 }
//         ]
//     }
// }
// const hasOven = kitchen.hasOven
// const fridgeWorks = kitchen.fridge.works
// if(kitchen.fridge.items[1].expiryDate <3){
//   console.log("Geraldine's raddish expired 1 day ago. ")
//   if(fridgeWorks){
//     console.log("Weird, considering her fridge works. ")
//     if(hasOven){
//       console.log("Luckily, she has an oven to cook the raddish in.")
//     }
//     else{
//       console.log("Too bad she doesn't have an oven to cook the raddish in. ")
//     }
//   }
//   else{
//     console.log("Probably because her fridge doesn't work. ")
//     if(hasOven){
//       console.log("Luckily, she has an oven to cook the raddish in. ")
//     }
//     else{
//       console.log("Too bad she doesn't have an oven to cook the raddish in. ")
//     }
//     console.log("And she'll have to pay 250 to fix the fridge. ")
//   }
// }

