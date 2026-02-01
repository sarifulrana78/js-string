const school ={
    name:"vns",
    class:[1,2,3],
    events :["science","bijoy"],
    unique:{
        color:"blue",
        result:{
            gpa:5,
            merit:"top"
        }
}
}
school.unique.result.merit="top top top and top"
/* console.log(school.unique.color) */
console.log(school.unique.result.merit)
console.log(school.events[1])
delete school.class
console.log(school)