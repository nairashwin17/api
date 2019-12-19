const myroot = document.getElementById('root'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; 

let xhr =new XMLHttpRequest;

xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
xhr.onload = function(){
   if (this.status === 200){
      let data = JSON.parse(this.responseText);
      console.log(data);
     data.forEach(myFunction);

     function myFunction(value, index){
      document.getElementById("root").innerHTML += "<div><p><b>"+ index +"</b>&nbsp;&nbsp;<em>" + value.title +"<em></p></div>";
     }
   }
   else if (this.status === 404 || this.status === 403 ){
      console.log('Error Getting Data');
   }
}

xhr.send();



// $(document).ready(function(){
  
//   var mydata="";
//   fetch(url)
//    .then(resp => resp.json())
//    .then(data => mydata = console.log(data));
//   //  alert();

//    $.each(data, function( index, value ) {
//     console.log(value);
//   });

// });

     


// async function getData(){

//    let response = await fetch(url);
//    let data = await response.json()

//    return data;
// }

// getData()
// .then(data => console.log(data))