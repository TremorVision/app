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
import classnames from "classnames";
import Chart from "chart.js";
import moment from 'moment';
import { Line } from "react-chartjs-2";
import DonutWithText from '../components/donutChart';
import Modal from '../components/modal';
import Navigation from "components/navbar.js";

import {
  chartOptions,
  parseOptions,
  chartExample1
} from "components/charts.js";

import {
  Alert,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Container,
  Row,
  Col,
  CardTitle,
  CardText
} from "reactstrap";

const defaultData = [82, 18];
const backgroundColor = ['#2DCE89', '#11CDEF'];
const labels = ['Healthy', 'Parkinson\'s'];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      isFinished: "Not Done",
      toDoMessage: "No data collected today, press the button below to get started.",
      data: {
        datasets: [{
          data: defaultData,
          backgroundColor: backgroundColor,
        }],
        labels: labels
      }
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    if (this.state.activeNav !== index) {
      this.setState({
        activeNav: index,
        chartExample1Data:
          this.state.chartExample1Data === "data1" ? "data2" : "data1"
      });
    }
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

  getTasks = (e) => {
    let currentDate = moment();
    let weekStart = currentDate.clone().startOf('week');
    let tasks = [];

    for (let i = 6; i >= 0; i--) {
      if (i < currentDate.day()) {
      let day = moment(weekStart).add(i, 'days').format("LL");
      let row = 
      <Row className='w-100 mx-auto'>
        <Col className='px-0'>
          <Card className='shadow-lg p-3 mb-4 bg-white rounded task'>
            <Row className='d-flex justify-content-between'>
              <Col sm='8'><CardTitle className='task-title mb-0 pb-0'>Complete your Parkinson’s Test</CardTitle></Col>
              <Col sm='2'><CardText><small class="text-muted">Reminder</small></CardText></Col>
            </Row>
            <Row><Col><small class="text-muted">Due date: {day} </small></Col></Row>

            <div className='d-flex justify-content-between'>
              <div className="d-flex align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("assets/img/geruh.jpeg")}
                  />
                </span>
                <small class="text-muted ml-2">Dr. Drew Gallardo</small>
              </div>
              <Alert id='task-btn' color="success">Complete</Alert>
              {/* <Button color="primary" id='task-btn' className='btn-msg' size="lg" type="button">{this.state.isFinished}</Button> */}
            </div>
          </Card>
        </Col>
      </Row>
      tasks.push(row);
      }
    }
    return tasks;
  };

  spiralTestFinished = (percent) => {
    this.setState({
      isFinished: "Complete",
      toDoMessage: "You have completed all your tests today!",
      spiralRes: percent

    })
    var property = document.getElementById("task-btn");
    property.style.backgroundColor = "#2dce89";
    property.style.borderColor = "#2dce89";
  }

  updateData = (result) => {
    let newPercent = 0;
    let newResult = [];
    if (result > 0) {
      newPercent = (this.state.data.datasets[0].data[0] + result) / 2;
      newResult = [newPercent, 100 - newPercent];
    } else {
      newPercent = (this.state.data.datasets[0].data[1] + (result * -1)) / 2;
      newResult = [100 - newPercent, newPercent];
    }

    // round data
    newResult[0] = Math.round(newResult[0] * Math.pow(10,2)) / Math.pow(10,2)
    newResult[1] = Math.round(newResult[1] * Math.pow(10,2)) / Math.pow(10,2)

    let data = {
      datasets: [{
        data: newResult,
        backgroundColor: backgroundColor,
      }],
      labels: labels
    }
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <>
      <div className="main-content">
        <Navigation/> 
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
                        <Row><Col><small class="text-muted">Due date: {moment().format("LL")} </small></Col></Row>

                        <div className='d-flex justify-content-between'>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                              <img
                                alt="..."
                                src={require("assets/img/geruh.jpeg")}
                              />
                            </span>
                            <small class="text-muted ml-2">Dr. Drew Gallardo</small>
                          </div>
                          <Alert id='task-btn' color="primary">
                            {this.state.isFinished}
                          </Alert>
                          {/* <Button color="primary" id='task-btn' className='btn-msg' size="lg" type="button">{this.state.isFinished}</Button> */}
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
                        <Row><Col><small class="text-muted">Due date: {moment().format("LL")}</small></Col></Row>

                        <div className='d-flex justify-content-between'>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                              <img
                                alt="..."
                                src={require("assets/img/geruh.jpeg")}
                              />
                            </span>
                            <small class="text-muted ml-2">Dr.  Drew Gallardo</small>
                          </div>
                          <Alert color="primary">Not Done</Alert>
                          {/* <Button color="primary" className='btn-msg' size="lg" type="button">Not Done</Button> */}
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
                        <Row><Col><small class="text-muted">Due date: {moment().subtract(1, 'days').format("LL")}</small></Col></Row>

                        <div className='d-flex justify-content-between'>
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                              <img
                                alt="..."
                                src={require("assets/img/geruh.jpeg")}
                              />
                            </span>
                            <small class="text-muted ml-2">Dr. Drew Gallardo</small>
                          </div>
                          <Alert color="success">Complete</Alert>
                          {/* <Button color="success" size="lg" type="button">Complete</Button> */}
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
                          <DonutWithText data={this.state.data}/>
                        </Col>
                        <Col xs='6'>{this.state.toDoMessage}</Col>
                      </Row>
                      <div className='d-flex justify-content-between'>
                        <div></div>
                        <Modal buttonLabel="Not Done" callback={this.spiralTestFinished} updateDataCallback={this.updateData}/> {/* pass in callback */}
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
      </div>
      </>
    );
  }
}

export default Dashboard;
