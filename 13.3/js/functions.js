//practice
//methods
// const person = {
//   name: "Julius",
//   speak: function(food) {
//     console.log("i like " + food)
//   }
// }
// console.log(person.name) 
// person.speak("cheese toast")


//1
// const calcAge = function(currentYear, birthYear){
//   let age = currentYear- birthYear
//   return age
// }
// const age = calcAge(2017, 1989)
// console.log(age)


// 2
// const calcAge = function(currentYear, birthYear){
//   let age = currentYear - birthYear
//   return age
// }
// const age = calcAge(2017, 1989)
// console.log("you are either " + age + " or " + (age-1))


//3
// const isEven = function(num){
//   if(num%2==0){
//     return true
//   }
//   else{
//     return false
//   }
// }
// console.log("is the number 25 even? --> " + isEven(25))


//4
// const isEven = function(num){
//   if(num%2==0){
//     return true
//   }
//   else{
//     return false
//   }
// }
// const fun1 = function(nums){
//   for(let index of nums){
//     if(!isEven(index)){
//       console.log(index)
//     }
//   }
// }
// fun1([42,5,17,18])


//5
// const fun1 = function(nums, num1){
//   for(let index of nums){
//     if(index == num1){
//       return true
//     }
//   }
//   return false
// }
// let nums = [1,2,3]
// let num1 = 4
// console.log("is the number " + num1 + " exist in " + nums + "? ---> " + fun1(nums, num1))


//6
// let calculator = {
//   add: function(num1, num2){
//     return num1 + num2
//   },
//   subtract: function(num1, num2){
//     return num1 - num2
//   }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)
// console.log(calculator.add(result1, result2)) //should print 42


//7
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)
    console.log(name + " has " + money + " gold coins")
}
const increaseByNameLength = function(money,name){
    money *= name.length
    return money
}
const makeRegal = function(name){
  name = "His Royal Highness, " + name
  return name
}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
