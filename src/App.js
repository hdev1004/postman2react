import logo from './logo.svg';
import './App.css';
import Postman2React from './lib/postman2React';
//import { Postman2React } from 'postman2react';
import postmanJson from "./Babble.postman_collection.json";

function App() {
  return (
    <div style={{width: "100%", height: "800px"}}>
        <Postman2React postmanJson={postmanJson} url={"*"}></Postman2React>
    </div>
  );
}

export default App;
