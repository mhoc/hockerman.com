import React from 'react'

import BasePage from "../components/BasePage";
import Header from "../components/Header";

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
        <BasePage>
          <Header text={`cat .${path}`} />
          <br />
          <div className="content">
            {`cat: .${path}: No such file or directory`}
          </div>
        </BasePage>
        <style jsx global>{`
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
        `}</style>
      </>
    )
  }

}

export default Error
