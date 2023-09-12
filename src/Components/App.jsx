import '../App.css';
import Feed from './Feed';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar';
import Newsfeed from './Newsfeed';
import Login from './Login';
import {login,logout,selectUser} from "./User"
import { useEffect } from 'react';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
   <>
      {user ? (
        <>
          <Navbar />
          <div className='sidebar_body'>
            <Sidebar />
            <Feed />
            <Newsfeed />
          </div>
        </>
      ) : (
        <Login />
      )}
   </>    
  )
}

export default App;
