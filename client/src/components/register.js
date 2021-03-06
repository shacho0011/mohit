import React, { Component } from 'react';

import { register } from './userCtrl'


class Register extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            address: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            address: this.state.address
        }

        register(user).then(res => {
            if (res) {
                console.log("Fired");
                this.props.history.push(`/login`);
            }
        })
    }

  render() {
    return (
        <div className="row">
            <div className="col-lg-5 md-5 sm-5 xs-12">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={this.state.name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={this.state.phone}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text"
                                    className="form-control"
                                    name="address"
                                    placeholder="Enter address"
                                    value={this.state.address}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                        </form>
                    </div>

      </div>
    );
  }
}

export default Register;
