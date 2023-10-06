import logo from './logo.svg';
import './App.css';
import Postman2React from './lib/postman2React';
//import { Postman2React } from 'postman2react';
import postmanJson from "./postman_collection.json";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/hdev1004/postman2react/master/src/postman_collection.json").then((res) => {
      setData(res.data);
    })
  }, [])

  return (
    <div>
        <Postman2React postmanJson={postmanJson} url={"*"} equalize={true}></Postman2React>
    </div>
  );
}

export default App;
