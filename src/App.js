import React from 'react';
import './App.css';
import Counter from './components/Counter'
import TitlePage from "./components/TitlePage";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <TitlePage name={'Users'}/>
          <UserList/>
          <Counter/>
          <Counter/>
      </header>
    </div>
  );
}

export default App;
