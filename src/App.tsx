import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList'
export interface topicsState{
  topics:{
    title:string
    desc?:string
    status:string
    lang:number
  }[]
 
}
function App() {
   const [topics, setTopics] = useState<topicsState["topics"]>([{
    title:'v-model',
    desc:'v-mode in react with typescript',
    status:"false",
    lang:2
  }])
  // topics.map(topic=>{
  //   topic.title 
  // })

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Start Learning  </h1>
        <p>take a look at the languages</p>
        <ul>
          <li> 1 . javascript</li>
          <li> 2 . typescript</li>
          {/* <li>v-model </li>
          <li>methods</li>
          <li> react hook, created react</li>
          <li> data property... component memory..... react</li> */}
      
        </ul>
        <h4>Add more ...</h4>  <hr/>
        <input type="text" placeholder="title"/> 
        <input type="text" placeholder="desc"/> 
        <input type="boolean" placeholder="status"/> 
        <input type="number" placeholder="lang"/> 
        <br/>
        <button >Add</button>
          <List  topics ={topics}/>
          <AddToList setTopics={setTopics} topics ={topics}/>

        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
