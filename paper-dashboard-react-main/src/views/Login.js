import React from "react";

import { Card, CardHeader, CardBody, CardTitle, Row, Col, Form, FormGroup, Input, Button, Nav, NavLink } from "reactstrap";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  let userName = "";

  const handleUserNameChange = (e) => {
    userName = e.target.value;
  }


  const routeChange = (event) =>{
    let path = "";

    if (userName== "michael") {
      path = `/admin/user-page`; 
    } else {
      path ='/admin/worker'
    }

    history.push({
      pathname: path,
      state: {user: userName}
    });
  }


  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Login</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>User Name</label>
                        <Input
                          name="username"
                          defaultValue=""
                          placeholder="Username"
                          type="text"
                          onChange={handleUserNameChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          placeholder="Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                    <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={(event) => routeChange(event)}>
                        Log in
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
