import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="container">
            <div className="headline">
                <h1 className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0ms">Welcome To Your </h1>
                <h1 className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0ms">Financial Wellness Benefit.</h1>
                <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms">It's about time to make your money work for you, not against you. Luckily, as part of your benefits package, General Mills offers you access to unbiased personal financial coaching that can help you tackle anything that life throws at you.</p>
            </div>
            <div id="banner">
              <div className="container">
                <div className="info">
                  <div className="column1">
                    <h1>Call a Financial Planner</h1>
                    <h2>Ask the hard Questions</h2>
                  </div>

                  <div className="column2">
                    <h1>1-800-766-8978</h1>
                    <h2>Monday thru Friday • 8 AM - 7 PM CT</h2>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Header;
