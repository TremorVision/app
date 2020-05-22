import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Col,
  Container,
  Row
} from "reactstrap"; 

class Cards extends React.Component {
  render() {
    return (
      <>
      
      <Container className="pb-4 pt-5 pt-md-6" fluid>
      {/* generate msgs */}
      <Col >
        <Card className='shadow-lg'>
            <CardBody>

                <Row className='w-100 mx-auto'>
                <Col className='px-0'>
                    <Card style={{ width: "15rem" }}>
                    <a href="https://www.linkedin.com/in/brandon-hong-591734128/">
                    <CardImg
                        alt="Janae Chan"
                        src={require("assets/img/theme/brandonhong.jpeg")}
                        top
                    /></a>
                    <CardBody>
                        <CardTitle>Brandon Hong</CardTitle>
                        <CardText>
                        <a href="https://www.linkedin.com/in/brandon-hong-591734128/">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        </CardText>
                    </CardBody>
                    </Card>
                </Col>
                <Col className='px-0'>
                    <Card style={{ width: "15rem" }}>
                    <CardImg
                        alt="Janae Chan"
                        src={require("assets/img/theme/geruh.jpeg")}
                        top
                    />
                    <CardBody>
                        <CardTitle>Drew Gallardo</CardTitle>
                        <CardText>
                        <a href="https://www.linkedin.com/in/drew-gallardo/">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        </CardText> 
                    </CardBody>
                    </Card>
                </Col>
                <Col className='px-0'>
                    <Card style={{ width: "15rem" }}>
                    <CardImg
                        alt="Janae Chan"
                        src={require("assets/img/theme/janaechan.png")}
                        top
                    />
                    <CardBody>
                        <CardTitle>Janae Chan</CardTitle>
                        <CardText>
                        <a href="https://www.linkedin.com/in/janaechan/">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        </CardText>
                    </CardBody>
                    </Card>
                </Col>
                <Col className='px-0'>
                    <Card style={{ width: "15rem" }}>
                    <CardImg
                        alt="Janae Chan"
                        src={require("assets/img/theme/robert.jpg")}
                        top
                    />
                    <CardBody>
                        <CardTitle>Robert Minneker</CardTitle>
                        <CardText>
                        <a href="https://www.linkedin.com/in/minneker/">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                        </CardText> 
                    </CardBody>
                    </Card>
                </Col>
                </Row>
            </CardBody>
        </Card>
      </Col>
        
      </Container>

      </>
    );
  }
}

export default Cards;