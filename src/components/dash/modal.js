import React, { useState, createRef, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import Canvas from '../dash/canvas'
import CanvasDraw from 'react-canvas-draw'


class ModalTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intructions: 'Trace the entire spiral and press evaluate.',
            modal: false,
            results: false,
            resultText: ''
        };
        this.toggle = this.toggle.bind(this);
    }

    clearModal() {
        this.setState({
            results: false,
            resultText: ''
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    makeblob(dataURL) {
        var BASE64_MARKER = ';base64,';
        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = decodeURIComponent(parts[1]);
            return new Blob([raw], { type: contentType });
        }
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;

        var uInt8Array = new Uint8Array(rawLength);

        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], { type: contentType });
    };

    populateResult(data, img) {
        let parkisonsPercentage;
        let healthyPercentage;
        if (data.predictions[0].tagName === 'parkinson') {
            parkisonsPercentage = data.predictions[0].probability;
            healthyPercentage = data.predictions[1].probability;
        } else {
            healthyPercentage = data.predictions[0].probability;
            parkisonsPercentage = data.predictions[1].probability;
        }
        let percentage;
        let relation;
        if (healthyPercentage <= parkisonsPercentage) {
            percentage = (parkisonsPercentage * 100).toFixed(1);
            relation = <span className='bg-danger'> Parkinson's spirals </span>
        } else {
            percentage = (healthyPercentage * 100).toFixed(1);
            relation = <span className='bg-info'>healthy spirals</span>
        }
        let text = <div>Our model shows that your spiral is {percentage}% similar to known {relation}</div>
        this.setState({
            results: true,
            resultText: text,
            spiralRes: img
        })

    }

    pingPlatform(e, img) {
        e.preventDefault();
        let url = "https://westus2.api.cognitive.microsoft.com/customvision/v3.0/Prediction/6fede207-de99-4fbe-8f04-44a2154495ad/classify/iterations/Iteration8/image";
        let imgBlob = this.makeblob(img);
        // const req = new Request()
        fetch(url, {
            headers: {
                "Prediction-Key": "78a3f4d1ae95492680685c14da50480d",
                "Content-Type": "application/octet-stream",
                "Prediction-key": "78a3f4d1ae95492680685c14da50480d"
            },
            method: 'POST',
            // processData: false,
            body: imgBlob
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.populateResult(data, img);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    finishTest() {
        this.setState({
            results: false,
            resultText: '',
            modal: false
        })
        var property = document.getElementById("test-btn");
        property.innerHTML = "Complete";
        property.style.backgroundColor = "#2dce89";
        property.style.borderColor = "#2dce89";
        this.props.callback();
    }

    isCanvasBlank(e, data, dataURL) {
        if (JSON.parse(data)["lines"].length == 0) {
            this.setState({
                intructions: 'Please trace the entire spiral before evaluating.'
            })
            var property = document.getElementById("help-txt");
            property.classList.add("fading");
            setTimeout(function(){property.classList.remove("fading");}, 2000);
        } else {
            { this.pingPlatform(e, dataURL) }
        }
    }

    render() {
        let content;
        if (this.state.results === true) {
            content = <>
                <ModalBody>
                    <h3>{this.state.resultText}</h3>
                    <p className='text-muted'>Click finish for your results to be logged and sent to your doctor. You may also personally download your image or try again.</p>
                    <img src={this.state.spiralRes} className='img-thumbnail mx-auto small-img'></img>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        onClick={() => { this.clearModal() }}
                    >Retry</Button>{' '}
                    <Button
                        color="primary"
                        onClick={() => { this.finishTest() }}
                    >Download</Button>

                    <Button
                        color="primary"
                        onClick={() => { this.finishTest() }}
                    >Finish</Button>
                </ModalFooter>
            </>

        } else {
            content = <>
                <ModalBody className='text-center'>
                <p id='help-txt' className='text-muted'>{this.state.intructions}</p>
                    <div className='test mt-2'>
                        <CanvasDraw
                            className='mx-auto sig-canvas'
                            lazyRadius={0}
                            brushRadius={2}
                            brushColor="#222222"
                            hideGrid
                            hideInterface
                            canvasHeight='100%'
                            canvasWidth='100%'
                            ref={(CanvasReact) => this.saveableCanvas = CanvasReact}
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="secondary"
                        onClick={() => { this.saveableCanvas.clear() }}
                    >Clear</Button>{' '}
                    
                    <Button
                        color="primary"
                        onClick={(e) => {this.isCanvasBlank(e, this.saveableCanvas.getSaveData(),this.saveableCanvas.canvasContainer.children[1].toDataURL() )}}
                    >Evaluate</Button>
                </ModalFooter>
            </>
        }

        return (
            <div>
                <Button color="primary" size='lg' id="test-btn" className='btn-msg' onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} className='modal-header'><h3>Spiral Drawing Test</h3></ModalHeader>
                    {content}
                </Modal>
            </div>
        );
    }
}

export default ModalTest;
