import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <h1 className="wow fadeIn" data-wow-duration="1s">AS SEEN IN</h1>
          <div className="row wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms">
            <div className="logo"><img alt="logo" src="images/company-logos/usatoday@2x.png" width="142" height="76" /></div>
            <div className="logo"><img alt="logo" src="images/company-logos/npr@2x.png" width="145" height="46" /></div>
            <div className="logo"><img alt="logo" src="images/company-logos/cnbc@2x.png" width="112" height="83" /></div>
            <div className="logo"><img alt="logo" src="images/company-logos/money@2x.png" width="150" height="46" /></div>
          </div>

          <div className="row wow fadeIn" data-wow-duration="1s" data-wow-delay="200ms">
            <div className="logo"><img alt="logo" src="images/company-logos/latimes@2x.png" width="263" height="31" /></div>
            <div className="logo"><img alt="logo" src="images/company-logos/washingtonpost@2x.png" width="279" height="43" /></div>
            <div className="logo"><img alt="logo" src="images/company-logos/newyorktimes@2x.png" width="260" height="36" /></div>
            <div className="logo"><img alt="logo" src="images/company-logos/wallstreetjournal@2x.png" width="287" height="24" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
