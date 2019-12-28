import React from 'react'

import BasePage from "../components/BasePage";
import TextHeader from "../components/text/TextHeader";
import TextStd from "../components/text/TextStd";

interface State {
  path: string;
}

class Error extends React.Component<{}, State> {

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
      <BasePage>
        <div><TextHeader>{`cat .${path}`}</TextHeader></div>
        <br />
        <TextStd>{`cat: .${path}: No such file or directory`}</TextStd>
      </BasePage>
    )
  }

}

export default Error
