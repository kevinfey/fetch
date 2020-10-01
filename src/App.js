import React, { useState }  from 'react';
import logo from './Fetch.png'
import './App.css';


function App() {

  const getData = () => {
    fetch('https://thingproxy.freeboard.io/fetch/http://fetch-hiring.s3.amazonaws.com/hiring.json'
        )
    .then(response => response.json())
    .then(data => setList(data));
  }

  const [list, setList] = useState([])
  getData()

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
  
      <header className="App-list">
       
         <ul>{listMap}</ul>

      </header>
    </div>
    </>
  );
}

export default App;
