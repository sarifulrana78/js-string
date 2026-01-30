const address="nabinagar"
const part=address.slice(2,6)
console.log(part)

const sentence="this is sariful islam rana"
console.log(sentence.split(" "))
console.log(sentence.split("a"))
const friendsStr="rana,fahim,siam,shuvo"
const friends=friendsStr.split(",")
console.log(friends)
const realFrined=[ 'rana', 'fahim', 'siam', 'shuvo' ]
console.log(realFrined.join(" - "))

const first="sariful."
const last="islam"
const fullName=first + " " +last
console.log(fullName)
const fullName1=first.concat(" ").concat(last)
console.log(fullName1)
console.log(last.includes("T"))


