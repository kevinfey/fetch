import React, { useState }  from 'react';
import logo from './Fetch.png'
import './App.css';


function App() {
 
  // Fetch Data
  // Use thingproxy to get around cors restrictions
  const getData = () => {
    fetch('https://thingproxy.freeboard.io/fetch/http://fetch-hiring.s3.amazonaws.com/hiring.json'
        )
    .then(response => response.json())
    .then(data => setList(data));
  }

  // init list to store data from fetch call and setList to update list
  const [list, setList] = useState([])
  // call getData
  getData()

  // create map 
  // sort by id and listID
  // remove null or "" from map
  const listMap = list.sort((a,b)=> a.id - b.id).sort((a,b)=> a.listId - b.listId).map((e) => {
   if (e.name){
  return (
    <li key={e.id}>
   <span className={`list${e.listId}`}> List {e.listId} </span>{e.name}
  </li>)
   }
  
 })

  return ( 
    <>
  <img id="logo" src={logo} alt="fetch-logo"></img>
    <div className="App">    
         <ul>{listMap}</ul>
    </div>
    </>
  );
}

export default App;
