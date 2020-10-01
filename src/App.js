import React from 'react';
import './App.css';
import MainHeader from './my_app/MainHeader';
import Main from './my_app/Main';
import SiteBar from './my_app/SideBar';
import MainFooter from './my_app/MainFooter'

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Main/>
      <SiteBar/>
      <MainFooter/>
    </div>
  );
}

export default App;
