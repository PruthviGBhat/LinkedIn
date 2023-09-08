import '../App.css';
import Feed from './Feed';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar';
import Newsfeed from './Newsfeed';
import Login from './Login';
import { AuthProvider } from './AuthContext';


function App() {

  const user = "abc";
  return (
    <>
      <AuthProvider>
        {
          user ? (<Login />) : (
            <>
              <Navbar />
              <div className='sidebar_body'>
                <Sidebar />
                <Feed />
                <Newsfeed />
              </div>
            </>
          )
        }
      </AuthProvider>

    </>
  )
}

export default App;
