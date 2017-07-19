import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTweets !== this.state.tweets) {
      this.setState({
        ...this.state.tweets.unshift(...nextProps.newTweets)
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.tweets.every(tweet => nextProps.newTweets.indexOf(tweet) > -1))
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
