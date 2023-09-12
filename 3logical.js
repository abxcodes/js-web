// AND &&
// OR ||
// NOT !
// Nullish ??


//  OR
//----------------------------

// let sponsers = false,
//      audience='abhinav';
//  let finalDecision= sponsers || audience;

//      console.log(finalDecision)


//  AND
//------------
// let haveMoney =true,
//     nowMoney=true,
//     futureMoney=false;

//     let getProject;
//     getProject = haveMoney || nowMoney && futureMoney;

//     console.log(getProject);

//     console.log(getProject ? "we can get a project" : "make money first");

// NOT
//----------------

// let batsMan1 = "",
//      batsMan2 = "";

//      if(!batsMan1){
//         console.log("provide batsman1 name");
//      }
  

//NUllISH
//-------------

 let firstName = "",
     middleName= "",
     lastName = "";

     let displayName = firstName ?? middleName ?? lastName ?? "name is there";

     console.log(displayName);
//3nullish dosen't consider it is true or false.also it works if the variabe is not defined.dosen't consider 0 and 1 as true/false






