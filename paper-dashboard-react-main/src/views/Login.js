import React from "react";

import { Card, CardHeader, CardBody, CardTitle, Row, Col, Form, FormGroup, Input, Button, NavLink } from "reactstrap";
import User from "./User";

function Login() {
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
                          defaultValue=""
                          placeholder="Username"
                          type="text"
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
                    <NavLink to="/admin/maps">
                    <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={() => alert("Hello!")}>
                        Log in
                      </Button>
                    </NavLink>
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
