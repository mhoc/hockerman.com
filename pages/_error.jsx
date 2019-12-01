import React from 'react'

import BasePage from "../components/BasePage";
import TextHeader from "../components/text/TextHeader";
import TextStd from "../components/text/TextStd";

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
          <TextHeader>{`cat .${path}`}</TextHeader>
          <br />
          <TextStd>{`cat: .${path}: No such file or directory`}</TextStd>
        </BasePage>
      </>
    )
  }

}

export default Error
