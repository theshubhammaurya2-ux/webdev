// let a=5;
// let b=4;
//operator
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a**b=",a**b);
// console.log("a++=",a++);
// console.log("++a=",++a);
// console.log("--a=",--a);
// a+=4;
// a==b;
// a!=b;
// a>=b;
// b<=a;
// a&&b;
// b|| a;
// !a;
// console.log(a)


//conditional

// if else
// let age=19;
// if (age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");  
// }


//if elseif
// let age=70;
// if (age>18){
//     console.log("you can vote");
// }
// else if(age===18){
//     console.log("next year you eligible")
// }
// else{
//     console.log("you cannot vote");  
// }

//ternary opeerator
// console.log(age>19?"adult":"teen");


//switch case
// const expr="shu";
// switch (expr){
//     case "shubham": console.log("shubham iss good");
//     break;
//     case "shubh":console.log("shubham is great")
//     default : console.log("shivam is bad he goes for washroom alone so he could talk to girl")
// }



// let review=prompt("give bad rattings to shivam");
// console.log(review);
// alert(" shivam is bad");

// let review=prompt("enter a number");
// console.log(review);

// let s=prompt("enter a number");
// if(s%3===0){
//     console.log(s,"is a multiple of 3");
// }
// else{
//     console.log(s,"is not multiple of 3");
// }




// let s=prompt("enter a number");
// if(s<=100 && s>=90){
//     console.log("grade a");
// }
// else if(s<=90 && s>=80){
//     console.log("grade b");
// }
// else if(s<=80 && s>=60){
//     console.log("grade c");
// }
// else{
//     console.log(" grade d");
// }

// // loops
// for(let i=1;i<=5;i++){
//     console.log("shivam is gajodharchacha");
// }

// for(let i=1;i<=5;i++){
//     console.log("i",i)
// }

// let age=23;
// while(age<45){
//     console.log("shivam is great kariappu");
//     age++;
// }



// let age=18;
// do{
//     console.log("shivam is psycho killer");
// }while(age<17)

// for of   automatic takes the value and update
// let strvar="shivam maurya ";
// let size=0;
// for(let i of strvar){
//     console.log(i);
//     size++;
// }  
// console.log(size);

// for in 
// let student={
//     name:"shubham maurya",
//     age:18,
//     marks:99900,
//     ispass:true,

// };
// for(let i in student){
//     console .log(i);
// }
// for(let i in student){
//     console .log(i,student[i]);
// }


//even number
// let count=0;
// for(let i=0;i<100;i++){
//     if(i%2==0) console.log(i);
// }


// // guess game
// let guess="65";
//  let i=prompt("guess the number");
// while(i!=guess) {
//     i=prompt("guess number is incorrect");
     
// }
// console.log("you guess it right");



//string
// let str="Sbbh";
// console.log(str.length);
// console.log(str);
// console.log(str[0],str[1]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
  
//array 
// let arr=[23,4,5,7,66,6,6,6,6];
// for(i in arr){
//     console.log(arr[i]);
// }
 

// let name=["shubham","sarthak","shivam","asthak","ghj","tyuiop"];
// name.shift();  //starting se delete
// name.unshift("shubham");  // starting mein addd
// for(i in name){
//     console.log(name[i]);
// }


// console.log(name.slice(0,3,103));
//function in js
// function shivambadiie(){
//     console.log("shivam is female with lots of boyfriend");
// }
// shivambadiie();

// function shivamgaya(){
//     console.log("shivam is gay and he is doing one night stand with lots of men");
//     console.log("shivam is doing mastrubtion here and there");
// }
// shivamgaya();
// console.log("evrything what shivam told is wrong");


// function shivammental(a, b){
//     console.log(a+b);
// }
// shivammental(3,4);

// function shivammental(a, b){
//     return (a+b);
// }
// console.log(shivammental(3,4));



// arrow function
//  const sum=(a,b)=>{
//     return a+b;
//  }
// console.log(sum(8,9));




// function vowels(str){
//    for(const a of str){
//    if(a==='i' ||a==='e' ||a==='a' ||a==='o' ||a==='u')
//       return a;
//    }
// }

// console.log(vowels("shubham"));


// const shiv=(a,b,c)=>{
//    return a+b+c;
// }
// console.log(shiv(2,3,4)); 



//for each method
// let arr=[1,2,3,4,5];
// arr.forEach((num)=>{
//   console.log(num*num);
// });

// array method 1> mapp method
// let arr=[1,2,9];
// // arr.map((val)=>{
// //    console.log(val);
// // })
// let shub=arr.map((el)=>el*3);
// console.log(shub);

// 2> filter
//  let arr=[1,2,3,4,5,,6,7,8,9];
//  let newarr=arr.filter((val)=>{
//    return val%2===0;
//  })
//  console.log(newarr)

//reduce concept
//  let arr=[1,2,3,4];
//  let suminitial=arr.reduce(
//    (first,second)=>first+second,0

//  );
//  console.log(suminitial);
       


//  let arr=[1,2,3,4,5,9,6,7,8,9];
//  let newarr=arr.filter((hcgpa)=>{
//       if(hcgpa>=8) return hcgpa;
//    }
//  );
//  console.log(newarr);


// date 
// console.log("shubham maurya")
// let currentdate=new Date();
// console.log(currentdate);
// console.log(currentdate.getMonth());  // month are indexed from 0 to 11 simlar for week
// console.log(currentdate.getDate());


// interval ke badd chalta rahe 
// setInterval(()=>{
//     console.log("shubham maurya");
// },2000);


// ek baar chalrega utna delay ke badd;
// setTimeout(()=>{
//     console.log("hii");
// },1000);



// let string='shubham mm ggjgh';
// let string1 ="shubham jghj";
// let checks=string1.replace("shub","shiv");
// let check=string.charAt(5);
// console.log(string);
// console.log(check);


// let element=document.getElementById('heading');
// element.style.backgroundColor="yellow";
// element.style.color="blue";
// element.innerText="shubham maurya";
// console.log(element[0]);


// let right=document.getElementsByClassName('head');
// right.style.backgroundColor="yellow";
// right.style.color="blue";
// console.log(right[0]);

let right=document.getElementsByTagName('p');
right.style.backgroundColor="yellow";
right.style.color="blue";
console.log(right[0]);

let r=document.get