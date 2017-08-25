import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return (
      <ol>
        {people.map(person =>
          <li key={person.name}>
            {person.name}
          </li>
        )}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList
          contacts={[{ name: 'Me' }, { name: 'Myself' }, { name: 'I' }]}
        />
        <ContactList
          contacts={[{ name: 'Does' }, { name: 'this' }, { name: 'work?' }]}
        />
      </div>
    );
  }
}

export default App;
