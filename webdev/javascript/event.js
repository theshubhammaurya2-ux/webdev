
// let btn1=document.querySelector('btn1');
// let btn2=document.querySelector('btn2');
// btn1.addEventListener('click',()=>{
//     document.body.style.backgroundColor="red";
// })


// let bgchangeblue=()=>{
//     document.body.style.backgroundColor="blue";
//     document.body.style.color="black";
// };

// let bgchangetored=()=>{
//     document.body.style.backgroundColor="red";
//     document.body.style.color="yellow";
// };

// <!-- fullfiled reject pending -->

//     let dohomework=new Promise((resolve,reject)=>{
//         let completed=true;
//         console.log("done homework")
//         setTimeout(()=>{
//             if(completed){
//                 resolve("home work fini+shed")
//             }
//             else{
//                 reject("didnt finished")
//             }
//         },2000)
//     })
//  dohomework.then(msg=>console.log(msg)).catch(msg=>console.log(msg))

const donehomework=()=>{
    return new Promise((resolve)=>{setTimeout(()=> {
        resolve("homework done")
    }, 2000);
})
}
    
const revise=()=>{
    return new Promise((resolve)=>{setTimeout(()=> {
        resolve("revision")
    }, 1500);
})
}
  

const playgames=()=>{
    return new Promise((resolve)=>{setTimeout(()=> {
        resolve("played gaME")
    }, 1000);
})
}
  
donehomework().then(res=>{
    console.log(res);
    return revise();
}).then(res=>{
    console.log(res);
    return playgames();
}).then(res=>{
    console.log(res);
})
