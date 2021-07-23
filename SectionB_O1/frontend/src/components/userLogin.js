import React, { Component } from 'react';
import logo from '../rabbit.svg';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectInfo: false,
      username: '',
      email: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    axios
      .post(
        '/su/login',
        { username: this.state.username, password: this.state.password },
        {
          headers: { Accept: 'application/json' },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }
      })
      .then(this.props.history.push('/'))
      .then(window.location.reload())
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div>
        <div className='container mt-5 mb-5'>
          <div className='row d-flex align-items-center justify-content-center'>
            <div className='col-md-6'>
              <div className='card px-5 py-5'>
                <img
                  src={logo}
                  width='50'
                  height='50'
                  className='d-inline-block align-center logo'
                  alt=''
                />
                <h5 className='mt-3'>
                  {this.state.incorrectInfo
                    ? 'Please check your info and try again'
                    : 'Enter your username and password to login'}
                </h5>
                <form onSubmit={this.handleFormSubmit}>
                  <div className='form-input'>
                    {' '}
                    <i className='fa fa-envelope'></i>{' '}
                    <input
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                      type='text'
                      className='form-control'
                      placeholder='user name'
                    />{' '}
                  </div>
                  <div className='form-input'>
                    {' '}
                    <i className='fa fa-lock'></i>{' '}
                    <input
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      type='text'
                      className='form-control'
                      placeholder='password'
                    />{' '}
                  </div>
                  <button type='submit' className='btn btn-primary mt-4 signup'>
                    Login
                  </button>
                </form>
                <div className='text-center mt-4'>
                  {' '}
                  <span>Not a member?</span>{' '}
                  <a
                    href='#!'
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.history.push('/u/signup');
                    }}
                    className='text-decoration-none'
                  >
                    Sign up
                  </a>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserLogin);
