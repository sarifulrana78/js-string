const school="Govt Science"
console.log(school)
console.log(school.toUpperCase())
console.log(school.toLowerCase())
const sub="Chem"
const book="chem"

if(sub.toUpperCase===book.toUpperCase){
    console.log("covered")
}
else{
    console.log("not covered")
}

const drink="water"
const liquid="   water "
if(drink.trim()==liquid.trim()){
console.log("yes")
}
else{
    console.log("NO")
}