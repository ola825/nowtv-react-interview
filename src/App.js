import React, { Component } from 'react';

import './App.css';
import MessageList from './components/MessageList';

 

class App extends Component {
  render() {
    
    return (
      <MessageList/>
    );
  }
}

// const mapStateToProps = state => {
//   return {};
// };

// const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

export default App;
