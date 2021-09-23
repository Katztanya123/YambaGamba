import React from "react";
import { GetMenus } from "Services/MenuService";

import { Card, CardBody, CardFooter, Row, Col } from "reactstrap";

class BreakFast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      menu: [],
    };
  }

  async componentDidMount() {
    let menus = await GetMenus();
    let menu = menus.find((menu) => menu.DisplayName === "BreakFast");
    this.setState({
      isLoaded: true,
      menu: menu,
    });
  }

  render() {
    if (this.state.isLoaded) {
      return this.state.menu.Meals.map((meal) => {
        console.log(meal);
        return (
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
                          <p className="card-category">{meal.DisplayName}</p>
                          <p />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="fas fa-sync-alt" /> {meal.Description}
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default BreakFast;
