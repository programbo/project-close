import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../images/logo.svg';

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h2``;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const getForms = async () => {
  const request = await fetch('https://project-close.now.sh/api/forms');
  const data = await request.json();
  console.log('data', data); // eslint-disable-line no-console
};

class App extends Component {
  componentDidMount() {
    getForms();
  }
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppContainer>
    );
  }
}

export default App;
