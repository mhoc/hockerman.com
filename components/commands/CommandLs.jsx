import React from "react";

import files from "../../util/filesystem";

import TextStd from "../TextStd";

const CommandLs = () => {
  return (
    <>
      {files.map(file => (
        <div className="itemContainer">
          <TextStd key={file.names[0]}>{file.names[0]}</TextStd>
        </div>
      ))}
      <style jsx>{`
        .itemContainer {
          marginRight: 4px;
        }
      `}</style>
    </>
  );
}

export default CommandLs;
