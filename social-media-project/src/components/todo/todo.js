import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Chats from '../chats/chats';
import './todo.css';
import ComingSoon from '../coming-soon/coming-soon';

function Todo() {
  const [id, setId] = useState(0)

  const [user, setUser] = useState([]);

  const fetchData = () => {
      return fetch("https://panorbit.in/api/users.json")
            .then((response) => response.json())
            .then((data) => setUser(data.users));
  }

  useEffect(() => {
    fetchData();
    setId(localStorage.getItem("id"))
  }, [])

  return (
    <div className="App">
      <Header data={user} id={id} pageName="Todo" />
      <Sidebar id={id} />
      <ComingSoon />
      <Chats className="chats" data={user} />
    </div>
  );
}

export default Todo;



