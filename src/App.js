import './App.css';
import Header from './components/header';
import { useState } from 'react'

function App() {
  const [toDo, setToDO] = useState(["Work", "office"])
  return (<div>
    <Header />
    <div id="content">
      content
    </div>
    <div style={{paddingLeft:"20px"}}>
      <div class="card">
        <div class="container">
          <h1>
            To Do App
          </h1>
          <h4><b>Subheader</b></h4>
          <p>{"Description"}</p>
          <label for="html">To Do's</label><br></br>
          <input type="text"></input>
          <ul>
            {toDo.map(todo => {
              return <li>{todo}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
