import * as React from 'react';

interface Props {
  greeting: any;
}

export default class HelloWorld extends React.Component<Props, {}> {
  render () {
    return (
      <div>
        <div>Greeting: {this.props.greeting}</div>
      </div>
    );
  }
}
