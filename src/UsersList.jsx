import React from 'react';

import User from './User.jsx';
import Pagination from './Pagination.jsx';

import './usersList.scss';

class UsersList extends React.Component {
  state = {
    currentPage: 1
  }

  goPrev = () => {
    this.setState({
      curruntPage: this.state.currentPage - 1
    })
  }

  goNext = () => {
    this.setState({
      curruntPage: this.state.currentPage + 1
    })
  }

  render() {
    const totalItems = this.props.users.length;
    const startItem = (this.state.currentPage - 1) * this.props.itemsPerPage;
    const endItem = startItem + this.props.itemsPerPage + 1;
    const usersList= this.props.users.slice(startItem, endItem);
   
    return (
      <div>
        <Pagination 
          goPrev={goPrev}
          goNext={goNext}
          currentPage={this.state.currentPage}
          totalItems={totalItems}
          itemsPerPage={this.props.itemsPerPage}
        />

        <ul className='users'>
          { 
            usersList.map(
              user => (
                <User key={user.id} {...user} />
              )
            )
          } 
        </ul>
      </div>
    )
  }
};

export default UsersList;

