import React from 'react'
import Webcam from './Webcam'


class WebcamCapture extends React.Component {
  state = {
    currentPicture: ""
  }

  displayWebcam = () => {
    if (this.props.webcamStatus) {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div>


      <Webcam
      audio={false}
      height={800}
      ref={this.setRef}
      screenshotFormat="image/jpeg"
      width={800}
      videoConstraints={videoConstraints}
      className="btn-outline-secondary rounded"
      />

      <button className="cam-btn btn-outline-secondary rounded btn-lg" onClick={this.capture}>Capture photo</button>
      <div>
      <img id="selfie" src={this.state.currentPicture} alt="Selfie" height="800" aria-hidden="true" />
      <button className="cam-btn btn-outline-secondary rounded btn-lg" onClick={this.props.handleImage}>Send photo</button>
      </div>
      </div>
    );
  }
  }



  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      currentPicture: imageSrc
    });
    console.log(imageSrc);
  };

  render() {
    return(
      <div>
        <center>
        <button  className="genres-btn btn btn-rounded btn-mdb-color btn-lg" onClick={this.props.showWebcam} href="#">Create a Playlist With a Selfie</button>
        {this.displayWebcam()}
        </center>
      </div>
  )
  }
}

export default WebcamCapture
