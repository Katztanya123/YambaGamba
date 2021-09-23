import React from "react";
import { GetMenu } from "Services/MenuService";

import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

class BreakFast extends React.Component {
  async componentDidMount() {
    let mishtane = await GetMenu();
    console.log(mishtane);
  }

  render() {
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
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default BreakFast;
