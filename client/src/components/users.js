import React, { Component } from 'react';

import { getUsers } from './userCtrl'

class Users extends Component {

  constructor() {
    super()
    this.state = {
        users:[]
    }
  }

  componentDidMount() {
    var promise = getUsers();
    promise.then(users => {
      this.setState({users:users});
      console.log(this.state.users);
    });
  }
  
  render() {

    var listItem = this.state.users.map(user =>
      <li>
        <div className="col-xs-12 col-sm-8">
          <h2>{user.name}</h2>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Phone: </strong>{user.phone}</p>
          <p><strong>Address: </strong>{user.address}</p>
        </div> 
      </li>
    );

    return (
      <div className="col-lg-6 md-6 sm-6 xs-12">
        <h1>List of registered users</h1>
        <div className="row">
          <ul className="list-group">
            {listItem}
          </ul>
        </div>
      </div>
        
    );
  }
}

export default Users;
