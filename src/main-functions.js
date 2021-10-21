// import React from 'react'

export default function RequestURL(method,url){
    return fetch(url, {
        "method": method,
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5"
        }
    })
    .then(response => {
        
        return response.json()
    })
    .catch(err => {
        console.error( err )
    });
  }
  
  // eslint-disable-next-line
 function search(Question) {
    if(Question!==null){
        Question.replace(' ','%20')
        
        RequestURL('GET',`https://imdb8.p.rapidapi.com/auto-complete?q=${Question}`)
    }
  
  }
  
  // const searchbtn = document.getElementById('searchbtn')
  // const searchfield = document.getElementById('searchfield')
  
  // searchbtn.addEventListener("click",search(searchfield.value))
  