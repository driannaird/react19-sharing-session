"use client";

import { useState } from "react";
import { SampleComponent } from "./utils/SampleComponent";
import Toggle from "../global/toggle";
import Button from "../global/button";

const Memoization = () => {
  "use memo";
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState(false);

  return (
    <>
      <Toggle onClick={() => setTheme(!theme)} theme={theme} />

      <br />

      <Button onClick={() => setCounter((prev) => prev + 1)} value={counter} />

      <SampleComponent theme={theme} />
    </>
  );
};

export default Memoization;
