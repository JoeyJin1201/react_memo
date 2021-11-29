import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants';

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ data })
  });
}

const Home = () => {
  const [test, setValue] = useState([
    1, 2, 3
  ]);
  function calValue() {
    setValue(
      function (prev) {
        return [
          'Hoo',
          ...prev
        ]
      }
    )
  }

  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    console.log('exec after refresh the page and data changed')
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false);
  }, [data]);

  useEffect(() => {
    console.log('only exec after refresh the page')
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      {test}
      <button onClick={calValue}>test</button>
      <Edit add={setData} submittingStatus={submittingStatus} />
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;
