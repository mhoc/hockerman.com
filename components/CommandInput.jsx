import React from 'react';

import colors from "../styles/colors"; 

import TextHeader from "./TextHeader";

class CommandInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      text: props.initialText,
    };
  }

  componentDidMount() {
    const ctrl = document.getElementById('command-input-form');
    ctrl.setSelectionRange(ctrl.value.length, ctrl.value.length);
  }

  render() {
    const { disable, onSubmit } = this.props;
    const { text } = this.state;
    return (
      <>
        <div className="container">
          <TextHeader>$</TextHeader>
          &nbsp;
          <input
            autoFocus={true}
            className="form"
            disabled={disable} 
            id="command-input-form"
            onChange={e => this.setState({ text: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && onSubmit && onSubmit(text)}
            spellCheck={false}
            value={text}>
          </input>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: row;
          }
          .form {
            background-color: transparent;
            border: 0;
            color: ${colors.primary};
            font-size: 1.5rem;
            font-family: 'IBM Plex Mono', monospace;
            resize: none;
            width: 100%;
          }
          @media only screen and (max-width: 600px) {
            .form {
              font-size: 1.2rem;
            }
          }
          .form:focus {
            border: 0;
            outline: none !important;
          }
          .form::selection  {
            background: ${colors.secondary};
            color: black;
          }
        `}</style>
      </>
    )
  }

}

export default CommandInput;
