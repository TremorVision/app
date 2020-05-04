/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";
// reactstrap components

import moment from 'moment';

import DonutWithText from '../components/dash/donutChart';

import Modal from '../components/dash/modal';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  CardText
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const data = {
  datasets: [{
    data: [82, 18],
    backgroundColor: [
      '#2DCE89',
      '#11CDEF'
    ]
  }],
  labels: [
    'Healthy',
    'Parkinson\'s'
  ]
};

const info = {
  legend: {
    display: true,
    position: 'bottom'
  },
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };


  getCurrentWeek = (e) => {
    let currentDate = moment();
    let weekStart = currentDate.clone().startOf('week');
    let days = [];

    for (let i = 0; i <= 6; i++) {
      let day = moment(weekStart).add(i, 'days').format("dddd").substring(0, 3);
      let dayNumber = moment(weekStart).add(i, 'days').format("D");
      let col = <Col>
        <div className={`day ${i === currentDate.day() ? 'dayActive' : ''}`}>
          <Row><Col>{day}</Col></Row>
          <Row><Col>{dayNumber}</Col></Row>
        </div>
      </Col>
      days.push(col);
    }
    return days;
  }


  render() {


    return (
      <>
        <Container className="pb-4 pt-5 pt-md-6" fluid>

          <Row>
            <Col className="mb-5 mb-xl-0" xl="7">
              <Card className='shadow-lg'>
                <CardHeader>
                  <h6 className="text-uppercase text-light">
                    2 out of 7 tasks completed this week
                  </h6>
                  <div>
                    <Progress
                      max="100"
                      value="28.5"
                      barClassName="bg-gradient-success"
                    />
                  </div>
                  <Row><Col className='date mb-4'>{moment().format("dddd, MMMM Do")}</Col></Row>
                  <Row className='d-flex justify-content-between'>
                    {this.getCurrentWeek()}
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* generate msgs */}
                  <Row className='w-100 mx-auto'>
                    <Col className='px-0'>
                      <Card className='shadow-lg p-3 mb-4 bg-white rounded task'>
                        <Row className='d-flex justify-content-between'>
                          <Col sm='8'>
                            <CardTitle className='task-title mb-0 pb-0'>Complete your Parkinson’s Test</CardTitle>
                          </Col>
                          <Col sm='2'>
                            <CardText><small class="text-muted">Reminder</small></CardText>
                          </Col>
                        </Row>
                        <Row><Col><small class="text-muted">Due date: May 5th, 2020</small></Col></Row>

                        <div className='d-flex justify-content-between'>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1-800x800.jpg")}
                              />
                            </span>
                            <small class="text-muted ml-2">Dr. Anne Nealson</small>
                          </div>

                          <Button color="primary" className='btn-msg' size="lg" type="button">Not Done</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Row className='w-100 mx-auto'>
                    <Col className='px-0'>
                      <Card className='shadow-lg p-3 bg-white rounded task mb-4'>
                        <Row className='d-flex justify-content-between'>
                          <Col sm='8'>
                            <CardTitle className='task-title mb-0 pb-0'>Take Prescription</CardTitle>
                          </Col>
                          <Col sm='2'>
                            <CardText><small class="text-muted">Reminder</small></CardText>
                          </Col>
                        </Row>
                        <Row><Col><small class="text-muted">Due date: May 5th, 2020</small></Col></Row>

                        <div className='d-flex justify-content-between'>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1-800x800.jpg")}
                              />
                            </span>
                            <small class="text-muted ml-2">Dr. Anne Nealson</small>
                          </div>

                          <Button color="primary" className='btn-msg' size="lg" type="button">Not Done</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Row className='w-100 mx-auto'>
                    <Col className='px-0'>
                      <Card className='shadow-lg p-3 bg-white rounded task mb-4'>
                        <Row className='d-flex justify-content-between'>
                          <Col sm='8'>
                            <CardTitle className='task-title mb-0 pb-0'>Complete your Parkinson’s Test</CardTitle>
                          </Col>
                          <Col sm='2'>
                            <CardText><small class="text-muted">Reminder</small></CardText>
                          </Col>
                        </Row>
                        <Row><Col><small class="text-muted">Due date: May 4th, 2020</small></Col></Row>

                        <div className='d-flex justify-content-between'>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                              <img
                                alt="..."
                                src={require("assets/img/theme/team-1-800x800.jpg")}
                              />
                            </span>
                            <small class="text-muted ml-2">Dr. Anne Nealson</small>
                          </div>

                          <Button color="success" size="lg" type="button">Completed</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>

                  <Row><Col><div className='mx-auto day dayActive'>Show More</div></Col></Row>
                </CardBody>
              </Card>
            </Col>

            {/* big task end */}

            <Col xl='5'>
              <Row>
                <Col xs='12' className='pb-4'>
                  <Card className='shadow-lg date'>
                    <CardHeader> Daily Message</CardHeader>
                    <CardBody>
                      <Row>
                        <Col xs='6'>

                          <DonutWithText />
                          {/* <div className='circle oneline'> */}
                          {/* <Doughnut
                            data={data}
                            options={info}
                          /> */}
                          {/* <h1 class="display-1 text-success perc"> */}
                          {/* <div className='perc-center'>82%</div> */}
                          {/* </h1> */}
                          {/* </div> */}
                        </Col>
                        <Col xs='6'>No data collected today, press the button below to get started.</Col>
                      </Row>
                      <div className='d-flex justify-content-between'>
                        <div></div>
                        <Modal buttonLabel='Not Done' /> {/* pass in callback */}
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col xs='12' className='pt-1'>

                  <Card className='shadow-lg'>
                    <CardHeader className="bg-transparent">
                      <Row className="align-items-center">
                        <div className="col">
                          <h6 className="text-uppercase text-light ls-1 mb-1">
                            Overview
                      </h6>
                          <h2 className="mb-0">Progress Tracking</h2>
                        </div>
                        <div className="col">
                          <Nav className="justify-content-end" pills>
                            <NavItem>
                              <NavLink
                                className={classnames("py-2 px-3", {
                                  active: this.state.activeNav === 1
                                })}
                                href="#pablo"
                                onClick={e => this.toggleNavs(e, 1)}
                              >
                                <span className="d-none d-md-block">Month</span>
                                <span className="d-md-none">M</span>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames("py-2 px-3", {
                                  active: this.state.activeNav === 2
                                })}
                                data-toggle="tab"
                                href="#pablo"
                                onClick={e => this.toggleNavs(e, 2)}
                              >
                                <span className="d-none d-md-block">Week</span>
                                <span className="d-md-none">W</span>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      {/* Chart */}
                      <div className="chart">
                        <Line
                          data={chartExample1[this.state.chartExample1Data]}
                          options={chartExample1.options}
                          getDatasetAtEvent={e => console.log(e)}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
