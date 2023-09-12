//multiple of threes

function solution(number){

var multipleofthrees = [];


for(let i=1;i<number;i++){
    if(i%3 ==0 || i%5 ==0){
       multipleofthrees.push(i);
    }
}
console.log(multipleofthrees);
let sumofthrees = multipleofthrees.reduce((num,acc)=> num +acc)
console.log('sum of threes '+ sumofthrees);
}
solution(30)

