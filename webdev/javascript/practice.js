// let con=document.querySelector('#container');
// console.log("container=",con);

// //access children
// console.log("all childs :-");
// console.log(con.children);  //all childeren
 //first child
// console.log(con.firstElementChild); 
// console.log(con.firstChild); //first child
// manipulate first element\
// con.firstElementChild.textContent="shubham";  
// manipulate last element
// con.lastElementChild.textContent="shivam";  
 

//parents
// const item=con.children[1];
// // console.log("parent of items",item.parentElement);


// // sblings
// const prevsibling=item.previousElementSibling;
// const nextsibling=item.nextElementSibling;

// console.log(prevsibling.textContent)
// console.log(nextsibling.textContent)


// console.log("shubam maurya")

// let element=document.querySelector("h1");
// // console.log(element);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.innerText);
// element.style.backgroundColor="yellow";
// element.style.color="red";

// creating element in web page by js
// let h2=document.createElement('h1');
// h2.innerText="shubham";
// h2.setAttribute('class','red');
// h2.setAttribute('id','sm');
// h2.removeAttribute('id')
// h2.style.backgroundColor="red";
// console.log(h2);


let container=document.querySelector('.container');
// container.append(h2) //container ke last mein cahala jaygea
// container.prepend(h2); // container ke first element mein jaygea
// container.before(h2)   //container ke bahar pahle aa jaygea
// container.after(h2);  //container ke niche magar baher
// container.remove(h2); 


 let img=document.createElement('img');
 img.setAttribute('src',"sm.jpg");
 img.setAttribute('alt','avtar');
 container.after(img);




 
 