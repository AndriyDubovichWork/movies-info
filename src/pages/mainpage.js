import React from 'react'
import RequestURL from './../main-functions.js'

export default function MainPage(){
    return(
        <div id='main'>

        </div>        
    )
}

const all =RequestURL("GET",'https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US')

console.log(all)
all.then(function(result){
    const main = document.getElementById('main')
    main.innerHTML=''
    for(let i=0;i<5 ;i++){
        result[i]=result[i].slice(7,-1)
        let elem = RequestURL('GET',`https://imdb8.p.rapidapi.com/title/get-details?tconst=${result[i]}`)
        // console.log(elem);
        elem.then(function(result){
            if(typeof result === 'object' &&
            !Array.isArray(result)&&
            result !== null){
                main.innerHTML+=`
                <div class="movies">
                <a href='#'>
                    <img src='${result.image.url}'>
                /a>
                <a href='#'>${result.title}</a>
                <h3>${result.year} year</h3>
                <h4>${result.runningTimeInMinutes} minutes</h4>
                </div>`
            }
        })
        
        
    }
})
