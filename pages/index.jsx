import React, { useState } from 'react';

import BasePage from "../components/BasePage";
import CommandCat from "../components/commands/CommandCat";
import CommandInput from "../components/CommandInput";
import CommandLs from "../components/commands/CommandLs";

const IndexPage = () => {
  const [ command, setCommand ] = useState("cat ./mike_hockerman.json ");
  const commandSplit = command.split(" ");
  const program = commandSplit[0];
  return (
    <BasePage>
      <CommandInput 
        initialText={command}
        onSubmit={(v) => setCommand(v)}
      />
      <br />
      <main>
        {program === "cat" 
          && commandSplit.length > 1
          && <CommandCat arg={commandSplit[1]} />}
        {program === "ls" && <CommandLs />}
      </main>
      <br />
    </BasePage>
  );
}

export default IndexPage;
