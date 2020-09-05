import React from 'react';
import './App.css';
import Header, { HeaderProps, Language } from './Header';
import logo from './logo.svg';

const myVal: HeaderProps = {
  nome: 'Daniel',
  logo: logo,
  classNumber: 12,
  language: Language.Typescript
};

function App() {
  return (
    <div className="App">
      <Header {...myVal} />
    </div>
  );
}

export default App;
