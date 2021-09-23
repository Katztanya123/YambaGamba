
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Upgrade() {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="card-upgrade">
              <CardHeader className="text-center">
                <CardTitle tag="h4">About Us</CardTitle>
                <p className="card-category">
                אנחנו ב – חד"א חרטנו על דגלנו לספק לכם חווית אירוח שלמה.
כי חד"א הוא לא רק מקום שמגישים בו אוכל, הוא חוויה טוטאלית:
המראות, הריחות, הטעמים והמרקמים השונים בפה,
שהכל מתחבר בביס אחד והחיוך נמרח על הפנים, אנחנו יודעים שעשינו את שלנו. 
                </p>
              </CardHeader>
              <CardBody>
              <p className="card-category">
                <hr></hr>
                  Are you looking for more delicious dishes? Please check our Premium
                  Version of Yamba Gamba PRO.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Upgrade;
