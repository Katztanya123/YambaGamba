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
      return (
        <div className="content">
          {this.state.menu.Meals.map((meal) => {
            return (
              <Row>
                <Col lg="10" md="6" sm="6">
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
                            <i /> {meal.Description}
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats">
                        <div>
                          {meal.IsVegan ? "Vegan Friendly" : "Not Vegan"}
                        </div>
                        <div>
                          {meal.IsVegeterian
                            ? "Vegeterian Friendly"
                            : "Not Vegeterian"}
                        </div>
                        <div>{meal.IsMilky ? "Milky" : "Not Milky"}</div>
                        <div>{meal.IsMeaty ? "Meaty" : "Not Meaty"}</div>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default BreakFast;
