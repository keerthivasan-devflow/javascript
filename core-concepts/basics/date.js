console.log(new Date())
console.log(new Date(2022,10,22,5,18,34))
console.log(new Date(2022, 10, 22))
console.log(new Date("November 13 2022"))
console.log(new Date("2022-11-22"))
console.log(new Date("march/25/2018"))
console.log(new Date("25/march/2015"))

const months = ["January", "February", "March", "April", "May", "June", "July",
 "August", "September", "October", "November", "December"];

 const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]

console.log(new Date().getFullYear())
console.log(months[new Date().getMonth()])
console.log(new Date().getDate())
console.log(weeks[new Date().getDay()])
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getSeconds())
console.log(new Date().getMilliseconds())
console.log(new Date().getTime())

console.log(new Date().toString())
console.log(new Date().toDateString())
console.log(new Date().toTimeString())
console.log(new Date().toUTCString())
console.log(new Date().toISOString())
console.log(new Date().toJSON())