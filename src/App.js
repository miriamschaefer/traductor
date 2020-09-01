import React from 'react';
import './App.css';
import ResultText from './ResultText';
import TextInput from './TextInput';
let text = '';

class App extends React.Component {
  render() {
    const handleText = (result) => {
      console.log('Me han avisado', result);
      text = result;
      this.forceUpdate();
    };
    return (
      <div className="App">
        <ResultText text={text} />
        <TextInput handleText={handleText} />
      </div>
    );
  }
}

export default App;
