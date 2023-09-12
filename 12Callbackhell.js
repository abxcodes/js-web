console.log('1.third umpare review requested')
let screenel= document.getElementById("screen")
let umpiredecision;
const TIMEOUT=10000;

function getthirdUmpireResults(callback){
    console.log("2.Third umpire review started");
    console.log('3.Third umpire is checking cameras');

   return new promise((resolve,reject)=>{

    setTimeout(()=>{ //asynchronous 
        
        resolve(umpiredecision='OUT')
    
        console.log(`4.third umpire result is ${umpiredecision}`);

    
   },TIMEOUT);

})
}
 
function displaythird(){
console.log(`5.ready show result in ground screen ${umpiredecision}`);
screenel.innerText=umpiredecision;

}

function passinfotoGroundump(){
     console.log("HEY GROUND UMPIRE PLS REVERT YOUR DECISION");
 
}

function LETSRESTARTMATCH(){
  console.log("7.match restarted after review");
}

 getthirdUmpireResults()
.then(displaythird)




