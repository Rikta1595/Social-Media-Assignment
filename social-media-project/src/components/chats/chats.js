import { useState } from 'react';
import './chats.css';

function Chats(props) {

  const [show, setShow] = useState(true)
   return (
      <div className="chats">
        {show ?
        <>
        <section style={{backgroundColor:" #eee"}}>
        <div className="container py-5">

          <div className="row d-flex justify-content-center">
            <div className="">
                <div className="card" id="chat1" style={{borderRadius: "15px"}}>
                  <div
                    className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                    style={{borderRadius: "15px"}}>
                    <i className="fas fa-angle-left"></i>
                    <p className="mb-0 fw-bold">Live chat</p>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="card-body">

                    <div className="d-flex flex-row justify-content-start mb-4">
                      {props.data.map((userObj, index) => (
                        <p>{userObj.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </section>
      </> :
      <>
        <span onClick={setShow(true)}>Collapsible Chat App</span>
      </>
      }
      </div>
    
  );
}

export default Chats;
