import '../App.css';
import Feed from './Feed';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar';
import Newsfeed from './Newsfeed';
import Login from './Login';


function App() {

  const user = null;
  return (
    <>
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

    </>
  )
}

export default App;
