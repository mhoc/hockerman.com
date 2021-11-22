import React from 'react'

import BasePage from "../components/BasePage";
import { TextStd } from "../components/text";

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
      <BasePage header={`cat .${path}`} nav={[{ label: "home", href: "/"}]}>
        <TextStd>{`cat: .${path}: No such file or directory`}</TextStd>
      </BasePage>
    );
  }

}

export default Error
