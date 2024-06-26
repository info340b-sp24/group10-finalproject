import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultProfileData = {
  username: "milllan",
  profilePic: "red-panda.jpg",
  profilePicAlt: "red panda profile picture",
  name: "Mila Nguyen",
  major: "Human Centered Design & Engineering",
  gradYear: "2026"
};

export default function ProfileInfo(props) {
  const [profileData, setProfileData] = useState(defaultProfileData);

  const currentUser = props.currentUser || profileData;
  const navigateTo = useNavigate();

  const handleEditClick = () => {
    navigateTo("/first-time-sign-in");
  };

  return (
    // <div className="profile">
    //   <div className="img-left-container">
    //     <section>
    //       <img
    //         className="profile-pic rounded-circle mx-3"
    //         style={{ width: "150px", height: "150px" }}
    //         src={currentUser.userImg}
    //         alt={currentUser.username + "'s profile icon"}
    //       />
    //     </section>
    //     <section className="mt-1" style={{ textAlign: "left" }}>
    //         <div>
    //           <h1>{currentUser.username}</h1>
    //           <p>{"@" + currentUser.usertag}</p>
    //           <p className="badge px-3 py-2 bg-purple rounded-5 text-light">{currentUser.major + ", " + currentUser.graduatingYear}</p>
    //           <button className="btn" onClick={handleEditClick}>Edit Profile</button>
    //         </div>
    //     </section>
    //   </div>
    // </div>

    <div className="profile">
      <div className="card mb-3">
        <div className="row g-0">
          <section className="col-md-4">
            <img
              className="profile-pic rounded-circle mx-3 bg-dark"
              style={{ width: "150px", height: "150px" }}
              src={currentUser.userImg}
              alt={currentUser.username + "'s profile icon"}
            />
          </section>
          <section className="col-md-8" style={{ textAlign: "left" }}>
              <div className="card-body">
                <h1 className="card-title">{currentUser.username}</h1>
                <p className="card-text">{"@" + currentUser.usertag}</p>
                <p className="badge px-3 py-2 bg-purple rounded-5 text-light">{currentUser.major + ", " + currentUser.graduatingYear}</p>
                <button className="btn" onClick={handleEditClick}>Edit Profile</button>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
}
