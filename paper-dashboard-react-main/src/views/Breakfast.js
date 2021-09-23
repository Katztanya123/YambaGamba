import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

function BreakFast() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Coffee</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Milk</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
              
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Yogurt</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Cornflakes</p>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
          </Col>
          <Col md="8">
          </Col>
        </Row>
      </div>
    </>
  );
}

export default BreakFast;
