/* global google */
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'
import jwt_decode from 'jwt-decode';

function App() {
  const [isGSignedIn, setIsGSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null)

  const handleCredentialResponse = response => {
    setIsGSignedIn(true)
    const decodedToken = jwt_decode(response.credential)
    setUserInfo({...decodedToken})
  }

  const googleButton = useRef(null);

  const initializeGSI = () => {
    google.accounts.id.initialize({
      client_id: '944301045116-usq3bf0h2algmn9g39gp34qobs82171v.apps.googleusercontent.com',
      cancel_on_tap_outside: false,
      //use_fedcm_for_prompt:true,
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      googleButton.current, 
      { theme: 'outline', size: 'large' } 
    );

    google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed()) {
        console.log(notification.getNotDisplayedReason())
      } else if (notification.isSkippedMoment()) {
        console.log(notification.getSkippedReason())
      } else if(notification.isDismissedMoment()) {
        console.log(notification.getDismissedReason())
      }
    });
  }

  const gSignOut = () => {
    // refresh the page
    window.location.reload();
  }

  useEffect(() => {
    const el = document.createElement('script')
    el.setAttribute('src', 'https://accounts.google.com/gsi/client')
    el.onload = () => initializeGSI();
    document.querySelector('body').appendChild(el)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div ref={googleButton}></div>
        <img src={logo} className="App-logo" alt="logo" />
        { isGSignedIn && userInfo ?
          <div>
            Hello {userInfo.name} ({userInfo.email})
            <br />
            <button className="g_id_signout" onClick={() => gSignOut()}>Sign Out</button>
          </div> :
          <div>You are not signed in</div>
        }
      </header>
    </div>
  );
}

export default App;
