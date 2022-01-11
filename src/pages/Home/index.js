import { useState, useEffect } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function pushData(Data) {
  const res = await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ Data }),
  });
}

const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    pushData(Data);
  }, [Data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={Data} deleteData={setData} />
    </div>
  );
};
export default Home;
