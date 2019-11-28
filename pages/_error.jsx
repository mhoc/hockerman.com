import React from 'react'

import BasePage from "../components/BasePage";
import CommandInput from "../components/CommandInput";
import TextStd from "../components/TextStd";

/**
 * the 404 page is, more-or-less, a copy of the index page, but the command
 * prompt is disabled and the rendered results are static, rather than relying
 * on the command logic. Since it'll always say the same thing.
 * 
 * See, depending on how deep you adopt the "mythology" of this thing, you may
 * wonder why, say, navigating to {site}/{file in the fake filesystem} doesn't
 * `cat` that file. Instead, it just says the file doesn't exist. 
 * 
 * Well, it just doesn't. You can't have everything you want. 
 */
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
          {path.length > 0 && <CommandInput disable={true} initialText={`cat .${path}`} />}
          <br />
          <TextStd>{`cat: .${path}: No such file or directory`}</TextStd>
        </BasePage>
      </>
    )
  }

}

export default Error
