
import './App.css';
import React from 'react'
import MainPage from './pages/mainpage' 
// import RequestURL from './main-functions'

function App() {
  return (
    <div id = 'html'>


        <div id='header'>
          <div id= 'searchBarDiv'>
              <input id= 'searchfield'type="text" name="SearchBar" placeholder='Enter your request'/>
              <button id = 'searchbtn'>Search</button>
          </div>        
        </div>      
        <MainPage/>
    </div>
  );
}

export default App;
