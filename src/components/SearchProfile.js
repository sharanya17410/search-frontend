import React, { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Jumbotron,
} from "react-bootstrap";

function SearchProfile(props) {
  const { user, isLoading } = useAuth0();
  console.log(props);
  const location = useLocation();

  useEffect(() => {
    console.log(location); // result: '/secondpage'
    //console.log(location.search); // result: '?query=abc'
    console.log(location.state.details); // result: 'some_value'
  }, [location]);
  return (
    <div>
      <Jumbotron>
        <h1>Profile of {location.state.details.first_name} {location.state.details.last_name}</h1>
        <p>
          Speciality : {location.state.details.speciality}
          <br/>
          City : {location.state.details.city}
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default SearchProfile;
