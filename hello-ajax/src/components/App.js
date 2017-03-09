import React from 'react';
import Search from './Search';
import UserList from './UserList';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchName: ''
    };
    // this.setSearchName = this.refreshName.bind(this);
  }

    setSearchName =  (searchName) =>{
        this.setState({ searchName })
    }

  render () {
    return (
        <div className="container">
          <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <Search setSearchName={this.setSearchName}/>
          </section>
         <UserList searchName={this.state.searchName}/>
        </div>
    );
  }
}
