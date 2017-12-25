import React, { Component } from 'react';


class Testimonial extends Component{
  render(){
    return (
      <div className="testimonial">
        <div><img alt="person" className="wow bounceIn" data-wow-duration={this.props.duration} data-wow-delay={this.props.delay} src={this.props.image} /></div>
        <blockquote className="wow fadeIn" data-wow-duration={this.props.duration} data-wow-delay={this.props.delay}>{this.props.text}</blockquote>
      </div>
    )
  }
}

class Testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
              <h1 className="title text-center">One Call Could Change Your Life</h1>
              <div className="dash-center"></div>
              <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay="0ms">Thousands of employees have taken control of their financial lives by reaching out to improve their finances, and ultimately, their overall lives. Here's what a few of them have to say:</p>
            <div className="row">
              <div className="column">
                <Testimonial duration="1s" delay="0ms" image="images/UserTestimonials/female.png" text='"I wish I would have used this benefit sooner. I increased my 401k, lowered monthly payments, lowered debt, and now have a plan in place to save money."' />
              </div>
              <div className="column">
                <Testimonial duration="1s" delay="100ms" image="images/UserTestimonials/female2.png" text='"This is one of my favorite benefits...I feel like Im making more sound financial decisions and feel supported and encouraged."' />
              </div>
              <div className="column">
                <Testimonial duration="1s" delay="200ms" image="images/UserTestimonials/male.png" text='"I thought it was a very effective session, for me. I don’t have a lot of knowledge in this area and thought I’d never be able to retire. Now, I can see there is some hope!"' />
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Testimonials;
