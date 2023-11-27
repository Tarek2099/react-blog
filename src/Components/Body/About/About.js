import image from "./images/FB_IMG_1633544529865.jpg";



function About () {

  function btnclick(e) {
    const clicked = e.target
    clicked.innerHTML = "Liked";
  }

  
    return (
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-6 myImage">
              <div className="left">
                <img src={image} alt="" className="aboutsecimg"></img>
                <button className="aboutsecbtn" onClick={btnclick}>
                  Like
                </button>
              </div>
            </div>
            <div className="col-6 aboutText">
              <div className="right">
                <h3 className="aboutme">About Me</h3>
                <p className="abouttext">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <h3 className="aboutme">What I do?</h3>
                <p className="abouttext">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default About;