import React from 'react';
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInputHandler = this.textInputHandler.bind(this);
  }
  textInputHandler(ev) {
    const value = ev.target.value;
    const ado = /(ado+)(?=\s|$)/gi;
    const pal = /(para el+)(?=\s|$)/gi;
    const pa = /(para+)(?=\s|$)/gi;
    const finalS = /(s+)(?=\s|$)/gi;
    const to = /(todo+)(?=\s|$)/gi;

    const result = value

      .replace(ado, 'ao')
      .replace(finalS, "'")
      .replace(pal, 'pal')
      .replace(to, "to'")
      .replace(pa, "pa'");
    this.props.handleText(result);
  }
  render() {
    return (
      <textarea
        className="text-input"
        onChange={this.textInputHandler}
      ></textarea>
    );
  }
}
export default TextInput;
