import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import './ProfilePage.css';

function ProfilePage() {
  const { user, logout } = useAuthContext();

  return (
    <div>
      <div>
        <img
          className="accImg"
          src="https://www.thewatchbox.com/on/demandware.static/-/Sites/default/dwb5430b0c/6_3%20final%20images/account/revised/Rolex-Daytona-Account-Hero-Image-2560x456.jpg"
          alt=""
        />
      </div>
      <div className="labacco">
        <div className="secondaryAccImage">
          <img className="accImage" src={user.photoURL} alt="" />
        </div>
        <div className="accInputs">
          <h1 className="accTitle">Welcome {user.displayName}</h1>
          <h2>Profile</h2>
          <input
            className="accinp"
            id="email"
            placeholder="UserName"
            name="user"
            value={user.displayName}
          />
          <input
            className="accinp"
            name="email"
            placeholder="Email"
            id="password"
            value={user.email}
          />

          <div className="loghomBTN">
            <Link onClick={() => logout()} to={-1} className="logoutBTN">
              Logout
            </Link>
            <Link className="homBTN" to={-1}>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
