import React, { Component } from 'react';
import './App.css';
import ModalPortal from './ModalPortal'
import Modal from './Modal'

class App extends Component {
  state = {
    modal : false
  }

  handleOpenModal = () =>{
    this.setState({
      modal : true
    })
  }

  handleCloseModal = () =>{
    this.setState({
      modal : false
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick={this.handleOpenModal}>모달 오픈</button>
      {
        this.state.modal &&  (<ModalPortal>
          <Modal onClose={this.handleCloseModal}></Modal>
        </ModalPortal>)
      }
      </div>
    );
  }
}

export default App;
