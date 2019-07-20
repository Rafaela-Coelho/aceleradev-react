import React from 'react';
import './App.css';

function Title() {
  return ( 
  <h1><Text text="Meu título"/> </h1>
  );
}

function Content() {
  return(
    <div>
      <p><Text text="Meu subtitulo" /></p>
    </div>
  );
}

function Text(props){
  return(
    <span className="text">{props.text}</span>
  )
}

function App() {
  return ( 
    <div>
      <Title></Title>
      <Content></Content>
      <h2><Text text="Meu texto" /></h2>
    </div>
  );
}

export default App;