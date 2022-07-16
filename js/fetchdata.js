const api_url = "https://jsonplaceholder.typicode.com/users";

// it will throw output promise in console.
// function getApidata(URL)
// {
//     var x=fetch(URL)
//     console.log(x);
// }
//to fetch the data from url:
function getApidata(URL) {
  fetch(URL) //after fetching url if the promise is fulfilled then write ypur response in next line.
    .then((res) => {
      return res.json();
    })
   // .then((data) => console.log(data)); // result is showing in console.
    .then((data) => {
    console.log(data);
    displayData(data);
    })
.catch((error) => console.log(error.message)) //it is used to return error message if promise is not met.
  }
//to display your data.
function displayData(APIDATA)
{
   console.log(APIDATA);
   for(let i of APIDATA)
   {
     let tr=document.createElement("tr");


     let td1=document.createElement("td");
     let td2=document.createElement("td");
     let td3=document.createElement("td");
     let td4=document.createElement("td");
     let td5=document.createElement("td");

     td1.innerText=`${i.id}`;
     td2.innerText=`${i.name}`;
     td3.innerText=`${i.email}`;
     td4.innerText=`${i.phone}`;
     td5.innerText=`${i.address.city}`;

     tr.appendChild(td1);
     tr.appendChild(td2);
     tr.appendChild(td3);
     tr.appendChild(td4);
     tr.appendChild(td5);

     document.getElementById('myTable').appendChild(tr);
   }
}
getApidata(api_url)

