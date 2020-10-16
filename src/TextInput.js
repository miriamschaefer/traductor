import React from 'react';
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInputHandler = this.textInputHandler.bind(this);
  }
  textInputHandler(ev) {

    ///\w{4,}
    // split('').filter(() => length > 4).map(replace(/ado$/, 'ao')).join(' )
    const value = ev.target.value;
    const ado = /(ado+)(?=\s|$)/gi;
    const pal = /(para el+)(?=\s|$)/gi;
    const pa = /(para+)(?=\s|$)/gi;
    const finalS = /(s+)(?=\s|$)/gi;
    const finalR = /(r+)(?=\s|$)/gi;
    const to = /(todo+)(?=\s|$)/gi;

    const result = value

      .replace(ado, 'ao')
      .replace(finalS, "'")
      .replace(finalR, "'")
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
