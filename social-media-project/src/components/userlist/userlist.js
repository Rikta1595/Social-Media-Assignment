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
import './userlist.css';
import ComingSoon from '../coming-soon/coming-soon';
import Profile from "../profile/profile";

function UserList(props, id) {
    console.log(props, id)

  return (
    <div className="user-list" style={{marginLeft: "-180px"}}>
        {props.data.length > 0 && props.data.filter(person => person.id !== id).slice(0, 2).map((userObj, index) => (
            <span key={index}>
                <li>
                <span>
                    <>
                    {index == 0 ? 
                        <>
                        <Link to={`/profile/${userObj.id}`}><img src={userObj.profilepicture} alt="profile-pic" style={{width: "10%", borderRadius: "50%",marginLeft: "140px", marginRight: "15px"}} />
                        {userObj.name}
                        </Link>
                        </> :
                        <>
                        <img src={userObj.profilepicture} alt="profile-pic" style={{width: "10%", borderRadius: "50%",marginLeft: "140px", marginRight: "15px"}} />
                        {userObj.name}
                        </>
                    }

                    </>
                </span>
            </li><hr/>
            </span>
        ))
        }
    </div>
  );
}

export default UserList;

