import React from 'react'
import Webcam from './Webcam'


class WebcamCapture extends React.Component {
  state = {
    currentPicture: ""
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
    console.log(this.props);
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <div>
        <h3 className="cam-text">Create a Playlsit with a Selfie</h3>

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

export default WebcamCapture
