import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Home extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        Success in login.
                        <Link to="/login">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
