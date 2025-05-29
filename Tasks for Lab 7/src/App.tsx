import Counter from './components/Counter'
import Greeting from './components/Greeting'
import { useState } from 'react';
import NavBar from './components/ui/NavBar';
import UserCard from './components/ui/UserCard';
import './index.css';
import UserList from './components/ui/UserList';
import Form from './components/ui/Form';

function App() {
  const [count, setcount] =  useState(0);
  const handleClick = () => {
    setcount(count + 1);
  };
  const handleReset = () =>{
    setcount(0);
  }

  const [showFruits, setshowFruits] = useState(true)
  const handleToggle = () =>{
    setshowFruits(prev => !prev);
  }

  const fruits: string[] = ['Apple', 'Banana', 'Mango'];
  const sports: string[] = ['Cricket', 'Hockey', 'Football'];

  return (
    <>  
      <NavBar/>
        <UserCard name="ahanaf" email="ahanaf627@gmail.com"/>
       <Greeting name="Ahanaf"/>
       <Greeting name="Tahmid"/>

        <button onClick={handleClick}>Click Me</button> 
        <button onClick={handleReset}>Reset</button> 
        <div>Count: {count}</div>
       <Counter/>
       <br/>
       <hr/>
       <hr/>


        <button onClick={handleToggle}> Toggle List </button>
       <h2>{showFruits?"Fruits":"Sports"} List </h2>
       <ul>
        { (showFruits? 

          fruits.map((val, idx)=>(
            <li> {val} </li>
          )): 
          sports.map((val, idx)=>(
            <li> {val} </li>
          ))
        
        )
        }
       </ul>

       <hr/>
       <UserList/>
       <hr/>
       
       <Form/>

       
    </>
  )
}

export default App
