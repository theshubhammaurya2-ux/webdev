
 const fetchdata=async()=>{
     let api=await fetch("https://jsonplaceholder.typicode.com/todos/")
     let data=await api.json();
     console.log(data)     
 }
 fetchdata();
  