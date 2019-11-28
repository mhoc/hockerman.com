import React from 'react'

class Error extends React.Component {

  constructor(props) {
    super(props);
    this.state = { path: "" };
  }

  componentDidMount() {
    this.setState({ path: window.location.pathname });
  }

  render() {
    const { path } = this.state;
    return (
      <>
        <div className="container">
          <div className="title">{`$ cat .${path}`}<span className="blink">|</span></div>
          <br />
          <div className="content">
            {`cat: .${path}: No such file or directory`}
          </div>
        </div>
        <style jsx global>{`
          html {
            font-family: 'IBM Plex Mono', monospace;
          }
          body {
            background-color: #000000;
            margin: 0;
          }
          .container {
            background-color: transparent;
            padding: 15vh 10vw;
          }
          @media only screen and (max-width: 600px) {
            .container {
              padding: 15vh 5vw;
            }
          }
          .title {
            color: #d1c4e9;
            font-size: 1.5rem;
          }
          @media only screen and (max-width: 600px) {
            .title {
              font-size: 1.2rem;
            }
          }
          .content {
            color: #d1c4e9;
            line-height: 1.4;
            margin: 0px 0px 2px;
          }
          @media only screen and (max-width: 600px) {
            .content {
              font-size: 0.9rem;
            }
          }
          .link {
            color: #80cbc4;
          }
          .blink {
            animation: blinkanim 1s steps(2, start) infinite;
            -webkit-animation: blinkanim 1s steps(2, start) infinite;
          }
          @keyframes blinkanim {
            to {
              visibility: hidden;
            }
          }
          @-webkit-keyframes blinkanim {
            to {
              visibility: hidden;
            }
          }
        `}</style>
      </>
    )
  }

}

export default Error
