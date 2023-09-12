// #Arrays

// const channel=["html","css","javascript","nextjs","rectjs"];

//1.length
// console.log(channel.length);

//2.Get values from array
// console.log(channel[0]);

//3.Modify array
// channel[0] = "HTML";
// console.log(channel);

//4.Delete a element from array
//  delete channel[1];

//5.Adding data to array(PUSH,UNSHIFT)
// channel.push("angular js");//this will push in the last index
// channel.unshift("React js");//will push the item to first index

//6.REmoving item from a array(POP,SHIFT)
// channel.pop(); //Deleting last element
// channel.shift(); //Deleting first element from array

//7.Splice & Slice
// const channel=["html","css","javascript","nextjs","rectjs"];

//1.SPLICE .will mutate the array
//-------------------------------------------------
    // channel.splice(0,2);// remove 0 element and from o 2tymes element  exclude2 return remininig elements
    // channel.splice(2,1);
    // channel.splice(0,2);
    //  const abhi=channel.splice(1,4);//will remove all element from 1 to end and print deleted 
    // channel=[];//deleting all array elements
    // channel.splice(0);//deleting all element
    // channel.splice(0,4)
    // channel.splice(2) //delete from 2-end and return left


    //2.SLICE .immutable to array(get element only)
    //----------------------------------------
    // const channel=["html","css","javascript","nextjs","rectjs","threejs"];

    // // channel.splice(3,3)// it removes 3 elements from index 3, but excludes the last one

    // // channel.splice(1,4)
    // array1=channel.slice(1)

    // console.log(array1);


//8.Array iterations of & in
    //--------------------
    // const channel=["html","css","javascript","nextjs","rectjs","threejs"];

    // for(let i in channel) //in used to get index values
    // for (let i of channel)//of used to print array elements
    //  console.log(i);

    //   for(let i=0;i<channel.length;i++){
    //     console.log(i);//will print index values //old method
    //   }

    //     forEach
    //     channel.forEach((topic)=>{ //foreach need a callback function here topic is parameter

    //         console.log(topic);
    //     })

    //   //Map
    //  channel.map((topic)=>{
    //     console.log(topic);
    //  })

 //10.Destructuring operation
    //---------------------

    // const channel = ["webdiary",3,2020]  //array destructuring

    // const [name,age,year]= channel;

    // console.log(year);

//11.spread opertaion
//---------------------

    // const elderAge=[90,78,100]
    // const younage= [18,20,25]

    // const spread1 = [...elderAge,...younage]
    // console.log(spread1);

//12.Array of objects
//-----------------------

    // const array1= [
    //     "abhinav",
    //     {
    //         firstName:"abhinav",
    //         lastName: "suresh",
    //         age:21
            
    //     },
    //     "ashik"
    // ]

    // // array1[0]='devika'




    // console.log(array1);
