import React, { useState } from "react";
import "./header.css";
import ProfileDetail from "../profile-detail/profile-detail";

const Header = (props) => {

  const [show, setShow] = useState(false)

  const showDropdown = () => {
    setShow(!show)
  };


  return (
    <div className="header col-lg-10 col-md-10 col-sm-10" style={{float: "right"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav" style={{marginRight: "94px"}}>
            <li className="nav-item active">
              <span className="nav-link">{props.pageName}</span>
            </li>
          </ul>
          {props.data.length > 0 && props.data.filter(person => person.id == props.id).map((userObj, index) => (
            <div className="dropdown" key={index}>
              <ul className="navbar-nav">
                <li className="nav-item my-2 my-lg-0">
                      <button className="nav-link nav-btn" onClick={showDropdown} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src={userObj.profilepicture} alt="profile-pic" style={{width: "5%", borderRadius: "50%", marginRight: "15px"}} /> {userObj.name}
                      </button>
                </li>
                
              </ul>
              
            </div>
                ))
                  // <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  //   <a className="dropdown-item" href="#">Action</a>
                  //   <a className="dropdown-item" href="#">Another action</a>
                  //   <div className="dropdown-divider"></div>
                  //   <a className="dropdown-item" href="#">Something else here</a>
                  // </div>
            
          }
        </div>
      </nav>
      { show &&
        // <p className="">haghgd</p>
        <ProfileDetail className="card popup" style={{width: "18rem"}} data={props.data} id={props.id} />
        // <div className="card popup" style={{width: "18rem"}}>
        //   <img className="card-img-top" src="..." alt="Card image cap" />
        //   <div className="card-body">
        //     <h5 className="card-title">Card title</h5>
        //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     <a href="#" className="btn btn-primary">Go somewhere</a>
        //   </div>
        // </div>
      }
    </div>
  );
}

export default Header;
