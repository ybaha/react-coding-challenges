import React, { useState, Component } from "react";
import RocketCore from "./RocketCore";

export const FunctionalRocket = React.memo(() => {
  const [initialLaunchTime] = useState(Date.now());
  // const initialLaunchTime = Date.now();

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Not the best comparison but ok
    return !JSON.stringify(nextProps) === JSON.stringify(this.props);
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
