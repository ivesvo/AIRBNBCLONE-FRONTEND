import React , {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewExp from './components/NewExp'
import ExpList from './components/ExpList'
import Detail from './components/Detail'
import UpdatePage from './components/UpdatePage'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import 'rheostat/initialize';
import 'rheostat/css/rheostat.css';
import ProtectedRoute from './utils/ProtectedRoute'



function App() {
  let [show, setShow] = useState(false)
  let [user, setUser] = useState()
  let [loaded, setLoaded] = useState(false) 
  
  
  useEffect(()=>{
    fetchUser()
  },[])
  
  
  const fbLogin = async data => {
    console.log(data)
    console.log(data.accessToken)
    if (data && data.accessToken) {
        const res = await fetch(`https://myhause.herokuapp.com/auth/login/facebook?token=${data.accessToken}`)
        if (res.ok) {
            const dt = await res.json()
            console.log("dt", dt)
            const user = dt.user
            const token = dt.token
            setUser(user)
            localStorage.setItem("token", token)
        } else {
            console.log(res)
        }
       
    }
  }


    const loginWithEmail = async (email, password) => {
        if (!email || !password) {
            console.log("need email and password");
            return
        }
        const res = await fetch(`http://localhost:5000/auth/login`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, password: password })
        });


    }


    const fetchUser = async () => {
        const token = localStorage.getItem("token")
        if (!token) {
          setLoaded(true)
          return
        }

        const res = await fetch(`https://myhause.herokuapp.com/users/me`, {
            headers: {
                authorization: `Bearer ${token}`,
                "Content-type": "application/json"
            }
        });
        if (res.ok) {
            const dt = await res.json();
            setUser(dt.data)
        } else {
            localStorage.removeItem("token")
        }

        setLoaded(true)

    }

    const logout = async () => {
        const res = await fetch(`http://localhost:5000/auth/logout`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        if (res.ok) {
            localStorage.removeItem("token")
            setUser(null)
        } else {
            console.log("BYE")
        }
    }
    


if (!loaded) return <div>Loading...</div>
  return (
    <div className="App">
     
      <Router>
      <Navbar loaded={loaded}  user={user} show={show} fbLogin={fbLogin}/>
        <Switch>
          <Route exact={true} path="/addexp">
            <NewExp />
          </Route>

          <Route exact={true} path="/login">
            <Login/>
          </Route>
        
          <Route exact={true} path="/">
            <ExpList />
          </Route>

          <Route exact={true} path="/exps/:expId">
            <Detail />
          </Route>

          <Route path="/exps/update/:expId">
          <UpdatePage />
        </Route>

        <ProtectedRoute user={user} path="/me" exact component={Profile} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;

