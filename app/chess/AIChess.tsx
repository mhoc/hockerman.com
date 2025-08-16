"use client";

import { useState } from "react";
import { Input } from "../components/Input/Input";

export function AIChess() {
  const [apiKey, setApiKey] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Input onChange={(e => setApiKey(e.target.value))} value={apiKey} />
    </div>
  )
}