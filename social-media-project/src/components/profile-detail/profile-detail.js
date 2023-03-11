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
import './profile-detail.css';
import ComingSoon from '../coming-soon/coming-soon';
import Profile from "../profile/profile";
import UserList from "../userlist/userlist";

function ProfileDetail(props) {
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
    <div className="profile-detail">
        {props.data.length > 0 && props.data.filter(person => person.id == props.id).map((userObj, index) => (
            <div className="card popup" style={{width: "18rem"}} key={index}>
                
                <img src={userObj.profilepicture} alt="profile-pic" style={{width: "20%", borderRadius: "50%",marginLeft: "140px"}} />
                <div className="card-body">
                    <h5 className="">{userObj.name}</h5>
                    <p className="">{userObj.email}</p>
                    <hr/>
                    <ul style={{listStyle: "none"}}>
                        <UserList data={props.data} id={props.id} />
                    </ul>
                    <Link to="/"><button className="btn btn-danger" style={{borderRadius: "25px", width: "45%"}}>Sign Out</button></Link>
                </div>
            </div>
        ))
        }
    </div>
  );
}

export default ProfileDetail;

