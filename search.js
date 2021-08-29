// here we fetch data from api 

var base_url="https://restcountries.eu/rest/v2/all";
var country_div=document.getElementById('country');
var countrysearch_input=document.getElementById('countrysearch');


// using fetch api

fetch(base_url)
.then((response)=>{
     return response.text()
})
.then((data)=>{
    // data is in json format so we have to use json parse to parse into array
    var parse_data=JSON.parse(data);
    parse_data.map(({name,flag})=>{
         country_div.innerHTML=country_div.innerHTML+`
    <div id="${name}" >
    <img  src="${flag}" alt="${name}"   />
    <p> ${name} </p>
    </div>
    `;
    })
})
.catch((e)=>{
    console.log(e)
})

// advance search dropdown

countrysearch_input.addEventListener('input',()=>{
       var filterkeyword=countrysearch_input.value.toUpperCase();
       labels=country_div.getElementsByTagName('p');
       
      for(var i=0;i<labels.length;i++){
          if(labels[i].innerText.toUpperCase().startsWith(filterkeyword)){
              labels[i].parentElement.style.display="";

          }
          else{
            labels[i].parentElement.style.display="none";
          }
      }

})


