import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

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

class About extends React.Component {
    getRoutes = aboutMe => {
    return aboutMe.map((prop, key) => {
        if (prop.layout === "/app") {
        console.log(prop.layout + prop.path);
        return (
            <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            />
        );
        } else {
        return null;
        }
    });
    };

  render() {
    return (
      <>
      {/* <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          /> */}
          
          {/* <Switch>
            {this.getRoutes(aboutMe)}
            <Redirect from="*" to="/app/index" />
          </Switch> */}

      <Container className="pb-4 pt-5 pt-md-6" fluid>
      <Col>
        <Card className='shadow-lg'>
            <Row className='w-100 mx-auto'>
            <section id="about">
                <div>
                    <h4>About Us</h4>
                    <span class="subhead">OUR STORY</span>
                    <p id="about-txt">TremorVision started off as a hackathon project in October 2019, 
                    and the idea stemmed from our passion about utilizing technology to tackle problems 
                    in health; creating something simple yet impactful. Parkinson’s Disease (PD) is the 
                    second most common age-related neurodegenerative disorder and is a multifaceted disease 
                    with a variety of symptoms that progressively worsen with time. Although there is no cure, 
                    treatment can be effective if PD is caught early enough. We found that there is no 
                    standardized way of evaluating the spiral test despite it being one of the most 
                    commonly conducted tests to detect early-onset PD and track its progression. 
                    </p>
                    <p></p>
                    <span class="subhead">Why TremorVision</span>
                    <p id="about-txt">
                    Using TremorVision, subtle tremors can be detected earlier. Giving patients a head start 
                    in their fight against PD.

                    Our tool empowers users to gain a holistic view of their health as it evolves over time, 
                    contributing to clinical decision support.

                    Our platform connects patients and physicians remotely, reducing travel burden and 
                    increasing access to quality care.

                    The data collected enables researchers and physicians to gain new insights on the 
                    global burden of this mysterious disease. 
                    </p>
                </div>
            </section>
            </Row>
            
            <CardBody>
            <div>
            <span class="subhead">Connect with us!</span>
            </div>
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

export default About;