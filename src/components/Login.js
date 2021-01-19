import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/login/index';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let userData = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { user } = this.props.userData;
    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>Sign in to your account</p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='username'
                    name='username'
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
                Don't have an account?<Link to='/register'>register now</Link>
              </form>
              <br />
              <br />
              <br />
              <br />
              {user.username && (
                <h2>
                  Your Data: <br />
                  Username: <b>{user.username}</b>
                  <br />
                  Password: <b>{user.password}</b>
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = (state) => ({
  userData: state.userData,
});

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (userData) => dispatch(loginUser(userData)),
  };
}

export default connect(mapStateToprops, mapDispatchToProps)(Login);
