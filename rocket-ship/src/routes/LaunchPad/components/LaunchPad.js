import React, { useEffect, useState } from "react";
import { ClassRocket, FunctionalRocket } from "./Rocket";
import "../styles/_launchpad.scss";

export default function LaunchPad() {
  const [, triggerRerender] = useState(Date.now());

  useEffect(() => {
    setInterval(() => {
      triggerRerender(Date.now());
    }, 500);
  }, []);

  React.useEffect(() => {
    const rockets = document.getElementsByClassName("rocket");
    rockets[0].style.left = "calc(30% - 60px)";
    rockets[1].style.left = "calc(70% - 60px)";
  }, []);

  return (
    <div className="launchpad">
      <ClassRocket />
      <FunctionalRocket />
    </div>
  );
}
