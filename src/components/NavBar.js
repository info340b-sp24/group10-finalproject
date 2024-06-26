import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar (props) {
  // ATTEMPTING TO CHANGE BUTTON TO REFLECT SIGN IN STATE
  // DO NOT DELETE
  // const currUser = props.currentUser;
  // console.log(currUser.userId);
  // const userId = currUser.userId;

  // const [signInOrOut, setSignInOrOut] = useState("");

  // useEffect(() =>  {
  //   console.log(userId);
  //   if (userId === null) {
  //     setSignInOrOut("Sign In");
  //     console.log(signInOrOut)
  //   } else {
  //     console.log(userId);
  //     setSignInOrOut("Log out");
  //     console.log(signInOrOut);
  //   }
  // }, [])

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const currentUser = props.currentUser;
  const isAuthenticated = props.isAuthenticated;
  const signoutUser = props.signoutUser;

  const nav = (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="../index">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../profile">My Profile</Link>
            </li>
          </ul>

          <div className="nav-item">
            <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>

          {currentUser.userId &&
            <>
              <div className="nav-item me-2 mx-2">
                <Link type="button" className="btn purple-btn text-white" to="../create-project">Upload Project</Link>
              </div>
            </>
          }

          <div className="nav-item me-2 mx-2">
            {isAuthenticated &&
              <>
                <Link id="sign-out" type="button" className="btn purple purple-outline text-purple" onClick={signoutUser}>Sign Out</Link>
              </>
            } 
            {!isAuthenticated &&
              <>
                <Link id="sign-in" type="button" className="btn purple-btn text-white" to="../sign-in">Sign In</Link>
              </>
            }
          </div>
        </div>
      </div>
    </nav>
  );

  return nav;
}