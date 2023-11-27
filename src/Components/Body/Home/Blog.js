import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,

  CardImg,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";



function Blog(props) {
console.log(props.data)
    return (
      <div className="container cards">
        <div className="row">
          <div className="col-12">
            <Card className="card">
              <div>
                <CardImg
                  alt="Card image cap"
                  src={props.data.image}
                />
              </div>
              <div>
                {" "}
                <CardBody>
                  <CardTitle tag="h5">{props.data.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    21 march
                  </CardSubtitle>
                  <CardText>{props.data.cardText}</CardText>
                  <Link to="/details">
                    <Button className="btn" onClick={props.clickDetails}>
                      Read More
                    </Button>
                  </Link>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
}
export default Blog;