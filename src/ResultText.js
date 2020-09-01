import React from 'react';

class ResultText extends React.Component {
  render() {
    console.log(this.props.text);
    return <p className="paragraph">{this.props.text}</p>;
  }
}
export default ResultText;
