import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "material-ui/styles";

import Popup from "./components/Popup";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196F3"
    },
    secondary: {
      main: "#f44336"
    }
  }
});

class App extends Component {
  state = {
    isOpen: true,
    trigger: null
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  setNotations = trigger => {
    this.setState({
      trigger
    });
  };

  render() {
    const wrapper = this.state.isOpen && (
      <Popup
        isOpen={this.toggleOpen}
        trigger={this.state.trigger}
        setNotations={this.setNotations}
      />
    );
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header" onClick={this.toggleOpen}>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          {wrapper}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
