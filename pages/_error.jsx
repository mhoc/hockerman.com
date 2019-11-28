import React from 'react'

import BasePage from "../components/BasePage";
import Header from "../components/Header";
import TextStd from "../components/TextStd";

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
          <TextStd>{`cat: .${path}: No such file or directory`}</TextStd>
        </BasePage>
      </>
    )
  }

}

export default Error
