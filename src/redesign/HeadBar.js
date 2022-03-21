import React, { useState } from "react";
import Github from "./HeadBar/Github";
import Settings from "./HeadBar/Settings";
import Time from "./HeadBar/Time";
import Weather from "./HeadBar/Weather";

export default function HeadBar() {
  const [isCompact, setIsCompact] = useState(false);

  return (
    <div className="grid grid-cols-4 bg-neutral-700 text-white text-mono">
      <Github />
      <Settings />
      <Time />
      <Weather />
    </div>
  );
}