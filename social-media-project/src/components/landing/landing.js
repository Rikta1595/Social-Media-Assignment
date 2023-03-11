
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import './landing.css'

function Landing() {

    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://panorbit.in/api/users.json")
              .then((response) => response.json())
              .then((data) => setUser(data.users));
    }

    useEffect(() => {
        fetchData();
        console.log(user)
    },[])
  
    return (
        <div className="landing">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Select an account</h5><hr/>
                    <div className="scrollable" style={{backgroundColor: "#f6f0f0", padding: "5px 0px 0px 5px"}}>
                        {user && user.length > 0 && user.map((userObj, index) => (
                            <Link to={`profile/${userObj.id}`} key={userObj.id}><p><span><img src={userObj.profilepicture} alt="profile-pic" style={{width: "10%", borderRadius: "50%", marginRight: "15px"}} /></span><span>{userObj.name}</span><hr/></p></Link>
                        ))}
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
        
    );
}

export default Landing;
