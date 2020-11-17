import React from "react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import SearchProfile from "./components/SearchProfile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/searchProfile">searchProfile</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/searchProfile">
              <SearchProfile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
