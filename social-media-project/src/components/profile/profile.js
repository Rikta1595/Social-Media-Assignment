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
import './profile.css';

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  const fetchData = () => {
      return fetch("https://panorbit.in/api/users.json")
            .then((response) => response.json())
            .then((data) => setUser(data.users));
  }

  useEffect(() => {
    fetchData();
    console.log(user)
    console.log(id)
    localStorage.setItem("id", id);
  },[])


  return (
    <div className="App">
      <Header data={user} id={id} pageName="Profile" />
      <Sidebar id={id} />
      {
        user.length > 0 && user.filter(person => person.id == id).map((userObj, index) => (
          <div key={index} className="col-lg-10 col-md-10 col-sm-10 profile">
            <div className="col-lg-4 col-md-4 col-sm-4 profile-div1 vl">
              <p style={{textAlign: "center"}}>
                <img src={userObj.profilepicture} alt="profile-img" style={{width: '45%', borderRadius: "50%"}} />
              </p>
              <p style={{textAlign: "center"}}><strong>{userObj.name}</strong></p>
              <p><span className="heading">Username : </span><strong>{userObj.username}</strong></p>
              <p><span className="heading">e-mail : </span><strong>{userObj.email}</strong></p>
              <p><span className="heading">Phone : </span><strong>{userObj.phone}</strong></p>
              <p><span className="heading">Website : </span><strong>{userObj.website}</strong></p>

              <hr/>
              <p className="heading" style={{textAlign: "center"}}>Company</p>
              <p><span className="heading">Name : </span><strong>{userObj.company.name}</strong></p>
              <p><span className="heading">catchphrase : </span><strong>{userObj.company.catchPhrase}</strong></p>
              <p><span className="heading">bs: </span><strong>{userObj.company.bs}</strong></p>

              <hr/>
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p className="heading" style={{textAlign: "left"}}>Address</p>
              <p><span className="heading address-detail">Street : </span><strong>{userObj.address.street}</strong></p>
              <p><span className="heading address-detail">Suite : </span><strong>{userObj.address.suite}</strong></p>
              <p><span className="heading address-detail">City : </span><strong>{userObj.address.city}</strong></p>
              <p><span className="heading address-detail">Zipcode : </span><strong>{userObj.address.zipcode}</strong></p>
              <hr />

              {/* <iframe style={{width: "300", height:"300", frameborder: "0", marginheight: "0", marginwidth: "0" }}
                src={`https://maps.google.com/maps?q=${userObj.address.geo.lat},${userObj.address.geo.lng}&hl=es&z=14&amp;output=embed`}
              >
              </iframe>
              <br />
              <small>
                <a 
                  href={`https://maps.google.com/maps?q=${userObj.address.geo.lat},${userObj.address.geo.lng}&hl=es;z=14&amp;output=embed`}
                  style={{color:"#0000FF", textAlign:"left"}}
                  target="_blank"
                >
                  See map bigger
                </a>
              </small> */}
            </div>
          </div>
        ))
      }
      <Chats className="chats" data={user} />
    </div>
  );
}

export default Profile;
