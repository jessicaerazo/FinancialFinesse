import React, { Component } from 'react';


class Coach extends Component{
  render(){
    return (
      <img alt="coach" className="wow fadeIn" data-wow-duration={this.props.duration} data-wow-delay={this.props.delay} src={this.props.image} />
    )
  }
}

class Coaches extends Component {
  render() {
    return (
      <div id="financial-coaches">
        <div className="container">
          <div className="row">
            <div className="column1">
              <div className="coaches">
                <Coach duration="350ms" delay="0ms" image="images/coaches/Brian.png" />
                <Coach duration="350ms" delay="50ms" image="images/coaches/Bruce.png" />
                <Coach duration="350ms" delay="100ms" image="images/coaches/Daphne.png" />
                <Coach duration="350ms" delay="150ms" image="images/coaches/Kelley.png" />
                <Coach duration="350ms" delay="200ms" image="images/coaches/Linda.png" />
                <Coach duration="350ms" delay="250ms" image="images/coaches/Michael.png" />
                <Coach duration="350ms" delay="300ms" image="images/coaches/Tania.png" />
                <Coach duration="350ms" delay="350ms" image="images/coaches/Teig.png" />
                <Coach duration="350ms" delay="400ms" image="images/coaches/Erik.png" />
              </div>
            </div>
            <div className="column2">
              <h1 className="title wow fadeIn" data-wow-duration="1s">About Our Financial Coaches</h1>
              <div className="dash-left wow fadeIn" data-wow-duration="1s"></div>
              <p className="wow fadeIn" data-wow-duration="1s">Our coaches are real people with the same financial challenges you struggle with. The difference is they have their CFP® designation and at least 10 years of experience working with people like you, so they've seen almost every predicament under the sun and can help you deal with whatever life has thrown your way.</p>
              <p className="wow fadeIn" data-wow-duration="1s">And because they are passionate about helping people, they decided to give up their licenses to sell anything and instead are completely focused on you and your needs, 100% of the time</p>
              <p className="wow fadeIn" data-wow-duration="1s"><a href="#meet" className="button">Meet the Team ></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Coaches;
