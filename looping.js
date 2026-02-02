const friends = ["elon","bill","mark"]
for (const friend of friends){
    console.log(friend)
}
for (let i=0; i<friends.length;i++){
    console.log(i)
    console.log(friends[i])
}

const number= [1,2,3,4,5,7]
for (let i=0;i<number.length;i++){
    /* console.log(number[i]) */
}

let i=0;
while(i<friends.length){
    /* console.log(friends[i]); */
    i++;
}
let n=0;
while(n<number.length){
    console.log(number[n])
    n++
}