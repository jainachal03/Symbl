import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [data, setData] = useState([]); // we would set this variable using the useState hook.

  const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((response) => {
        console.log("this is the response bitches");
        // console.log(response);
        setData(response["data"]);
      })
      .catch((error) => console.error(" there was some error"));
  };

  const url = "https://jsonplaceholder.typicode.com/posts"; // this is the url
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Quotes</h1>
      {data.map((item, i) => (
        <li key={i} style={{ listStyle: "none" }}>
          <Card data={item["body"]} />
        </li>
      ))}

      {/* <Card data={"I am Achal Jain"} /> */}
    </div>
  );
}

export default App;
