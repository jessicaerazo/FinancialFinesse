import React, { Component } from 'react';


class Login extends Component {
  render(){
    return (
      <div id="login" className="wow fadeIn" data-wow-duration="300ms">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" placeholder="you@email.com" className="input" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="password" className="input" />
          </div>

          <p><button className="button">Log In</button></p>
          <p>New user? <a href="#register">Register</a></p>
        </form>
      </div>
    )
  }
}

class Navigation extends Component {
  constructor(props){
    super(props);

    this.state = {
      showLogin: false
    };
  }
  render() {
    return (
      <div id="navigation">
        <div className="container">
            <nav>
              <div className="logo"></div>
              <div className="navigation">
                <ul>
                  <li><a href="#benefits">Your Benefits</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#" onClick={this.login}>Log In / Register</a></li>
                </ul>
              </div>
            </nav>
            {this.state.showLogin ? <Login /> : null }
        </div>
      </div>
    );
  }
  login = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }
}

export default Navigation;
