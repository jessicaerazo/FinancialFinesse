import React, { Component } from 'react';


class Benefit extends Component {
  render() {
    return (
      <li className="wow fadeIn" data-wow-duration={this.props.duration} data-wow-delay={this.props.delay}>{this.props.text}</li>
    )
  }
}

class Benefits extends Component {
  render() {
    return (
      <div id="benefits">
        <div className="container">
          <div className="row">
            <div className="column1">
              <h1 className="wow fadeIn" data-wow-duration="1s">Use Your Financial Wellness Benefit To:</h1>
            </div>
            <div className="column2">
              <ul>
                <Benefit duration="350" delay="0ms" text="Get out of debt" />
                <Benefit duration="350" delay="50ms" text="Protect yourself from the unexpected" />
                <Benefit duration="350" delay="100ms" text="Navigate key life events" />
                <Benefit duration="350" delay="150ms" text="Plan for goals like a home, college, and retirement<" />
                <Benefit duration="350" delay="200ms" text="Get any of your financial questions answered" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
