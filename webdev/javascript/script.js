// console.dir(document.body);
// let head=document.getElementById("heading");
// console.dir(head);

// let heade=document.getElementById("heading2");
// console.dir(heade);

// let headr=document.getElementsByClassName("ece");
// console.dir(headr);


// let hdr=document.getElementsByTagName("h2")
// console.dir(hdr);


// //first element return karega
// let elements=document.querySelector("#heading");
// console.dir(elements);


//all elements  node list
// let elements=document.querySelectorAll(".ece");
// console.log(elements);

//property 
// let tagname=elements.tagName;
// let innertxt=elements.innerText;
// let innerhtml=elements.innerHTML ; //same as innertxt but it give inner html tag
// let textcontent=elements.textContent;
// console.dir(textcontent);

//accesing each elemnts childs and modifying text
// acce[0].innerText="shubham maurya is the boss";
// console.log(acce[0]);



//creating any tag with javascript
// let newbin=document.createElement("button");
// newbin.innerText="click me";
// newbin.style.color="white";
// newbin.style.backgroundColor="red";
// document.querySelector("body").prepend(newbin);


// get calss name;
// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// change class name
// let para=document.querySelector("p");
// para.setAttribute("class","classname");

//changing property of any tag
// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.fontSize="26px";
// div.innerText="hello";




// create  element to screen

// let el=document.createElement("button");
// el.innerText="click me";
// el.style.backgroundColor="red"
// document.querySelector("div").prepend(el);  //add to top
// document.querySelector("div").append(el);  // add to bottom
// document.querySelector("div").before(el); // adds before the element div start
// document.querySelector("div").after(el);


//new element in any ELEMENTS
// let heading=document.createElement("h1");
// heading.innerHTML="<i>hii i am devil</i>";
// document.querySelector("div").prepend(heading);
// heading.style.backgroundColor='red';
// document.querySelector("div").remove();


// create marqee  tag
// let df=document.createElement("marquee");
// df.innerText="hii  this is shubham maurya";
// df.style.backgroundColor="red";
// document.querySelector("body").prepend(df)



// handle events
// let child=document.querySelector("#child1");
// child.onclick=()=>{
//     console.log("shubham is good");   
// }

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("scify");
// }

// let div=document.querySelector("div");
// div.onmouseover=(e)=>{
//     // console.log("scify");
//     // console.log(e);
//     // console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }



// let btn1=document.querySelector("#child1");
// btn1.addEventListener("click",(evnt)=>{
//     console.log("button1 was clicked");
// });

// btn1.addEventListener("click",()=>{
//     console.log("button 2 was clicked");
// });


//remove any element 
// const handler3=()=>{
//     console.log("button1 was clicked-handler3");
// }
// btn1.addEventListener("click",(handler3));
// btn1.removeEventListener("click",(handler3));



// change color of desktop
// let mode=document.querySelector("#mode");
// let currmode="light";
// mode.addEventListener("click",()=>{
//         if(currmode==="light"){
//             currmode="dark";
//             document.querySelector("body").style.backgroundColor="black";
//         }
//         else{
//             currmode="light";
//             document.querySelector("body").style.backgroundColor="white";
//         }
        
//         console.log(currmode);
// });



// const student={
//     fullname:"shubham maurya",
//     marks:99.9999,
//     printMarks:function(){
//         console.log("marks=",this.marks);
//     },
// };

// const shivam={
//     salary:500,
// };
// shivam.__proto__=student;

// class bmw{
//    start(){
//     console.log("start");
//    }                 
//    stop(){
//     console.log("stop");
//    }
// }
// let fortuner= new bmw();
// let ferrari= new bmw();
// let volshwagen= new bmw();
// let scorpio= new bmw();
// let thar= new bmw();


    
// let element=document.querySelector('.ece');
// element.style.backgroundColor="red";
// element.style.color="blue";


let element=document.querySelectorAll('.ece');
element.style.backgroundColor="red";
element.style.color="blue";





























































