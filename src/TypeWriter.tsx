import React from "react";

interface TypeWriterProps {
    data: string[]
}

interface TypeWriterState {
    text: string
}

class TypeWriter extends React.PureComponent<TypeWriterProps, TypeWriterState> {
  unmounted: boolean = false;
  loopCt: number = 0;
  interval: number = 2000;
  isReversing: boolean = false;

  constructor(props: TypeWriterProps) {
    super(props);
    this.state = { text: " " };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {

    if (this.unmounted) {
      return;
    }

    const { data: toRotate } = this.props;
    const i = this.loopCt % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = " ";

    if (this.isReversing) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isReversing) {
      delta /= 2;
    }

    if (!this.isReversing && newText === fullTxt) {
      
      setTimeout(() => {
        this.isReversing = true;
      }, 2000);

      delta = this.interval;
    
    } else if (this.isReversing && newText === "") {
      this.isReversing = false;
      this.loopCt++;
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return <span className="typewriter">{this.state.text}|</span>;
  }
}

export default TypeWriter;
