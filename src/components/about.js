import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="logo wow fadeIn" data-wow-duration="1s"></div>
          <h1 className="title text-center wow fadeIn" data-wow-duration="1s">About Financial Finesse</h1>
          <div className="dash-center text-center wow fadeIn" data-wow-duration="1s"></div>
          <div className="row">
            <div className="column text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms">
              <p>We believe that everyone should have access to life changing financial planning to improve their finances, regardless of income, and that it should be free of sales pitches, hidden agendas, and unnecessary commissions and fees.</p>
            </div>
            <div className="column text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms">
              <p>That’s why we've been operating since 1999 with a single mission: to provide people like you with completely unbiased financial guidance, so you have the information and confidence to tackle all of life's critical financial decisions.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
