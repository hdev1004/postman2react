import logo from './logo.svg';
import './App.css';
import Postman2React from './lib/postman2React';
//import { Postman2React } from 'postman2react';
import postmanJson from "./postman_collection.json";

function App() {
  return (
    <div>
        <Postman2React postmanJson={postmanJson} url={"*"} equalize={true}></Postman2React>
    </div>
  );
}

export default App;
