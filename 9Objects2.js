
let channelData ={
    channelName : "web diary",
    channelAge :5,
    channelTopics : ["html","css","js"],
    channelMessage : function(){
   console.log("let's share some knowledge here..");
    }
};


//1.iterations
for(let what in channelData){
    console.log(channelData[what]);
}

//2.Get only keys
// console.log(Object.keys(channelData));

//3.Get only values
// console.log(Object.values(channelData));

//4. we want keys and values
// console.log(Object.entries(channelData));//here we get a array of array vales instead of a object

//5.Object referencing 
// let channelData ={
//     channelName : "web diary",
//     channelAge :5,
//     channelTopics : ["html","css","js"],
//     channelMessage : function(){
//    console.log("let's share some knowledge here..");
//     }
// }

// let channelDataCopy= channelData;


// channelDataCopy["channelAge"]=900;//we can see the chage in both reference
// console.log("channelData",channelData);
// console.log("dataCopy",channelDataCopy);//here copy build from channeldata  reference

//6.Copy object

// let channelDataCopy = Object.assign(channelData);//now update only in channeldatacopy
// channelDatacopy.channelName="abhinavss";
// console.log("channelData",channelData);
// console.log("channelDataCopy",channelDataCopy);

//7.freeze object

// let channelLogin = {
//     userName :"webDiary",
//     password: "abhinav"
// }

// Object.freeze(channelLogin);//this will freez the object so noupdates posssible in future

// let hacker = Object.assign(channelLogin);
// hacker.password = "gopika";

// console.log(channelLogin);

//8.Object with const

// const channelData ={
//     channelName : "web diary",
//     channelAge :5,
//     channelTopics : ["html","css","js"],
//     channelMessage : function(){
//    console.log("let's share some knowledge here..");
//     }
// }

// // channelData["channelName"]="brotoType"// this will change the value even it's const

// channelData= "abhinav";//we cant change the total value of channeldata but can change the inner values 
// console.log(channelData);

//9.spread operaton = Merge objects

// const  channelBasicinfo ={
//     channelName:"web diary",
//     age:9
// }

// const channelAdvanceinfo= {
//     isMonitised: true,
//     twoFactorauth: true
// }
 
// const aboutChannel = {...channelBasicinfo,...channelAdvanceinfo}

// console.log(aboutChannel);

//10.Nexted objects -objescts can have any datatype

// let channelData ={
//     channelName : "web diary",
//     channelAge :5,
//     channelTopics : ["html","css","js"],
//     channelMessage : function(){
//    console.log("let's share some knowledge here..");
//     },
//     advancedinfo : {
//         monitization : true,
//         revenue: "1000rs "
//     }
// }
// Object.values(channelData.advancedinfo);



// console.log(channelData);