import logo from './logo.svg';
import './App.css';
import Postman2React from './lib/postman2React';
import postmanJson from "./postman_collection.json";

function App() {
  return (
    <Postman2React postmanJson={postmanJson} url={"*"} equalize={true}></Postman2React>
  );
}

export default App;
