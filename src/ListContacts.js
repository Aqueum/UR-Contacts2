import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    console.log('Props', this.props);
    return <ol className="contact-list" />;
  }
}

export default ListContacts;
