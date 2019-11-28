import React from "react";

import files from "../../util/filesystem";

import BodyJSON from "../BodyJSON";
import TextStd from "../TextStd";

const CommandCat = ({ arg }) => {
  const matchingFiles = files.filter(f => f.names.includes(arg));
  if (matchingFiles.length === 0) {
    return <TextStd>{`cat: ${arg}: No such file or directory`}</TextStd>
  }
  const file = matchingFiles[0];
  if (file.json) {
    return <BodyJSON dataset={file.json} />
  } else if (file.text) {
    return <TextStd>{file.text}</TextStd>
  }
  return <TextStd>{`i messed up`}</TextStd>
}

export default CommandCat;
