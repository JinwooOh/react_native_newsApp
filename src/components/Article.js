import React, { Component } from 'react';
import { View, Linking, TouchableNativeFeedback, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';

export default class Article extends Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url,
    } = this.props.article;
    return (
      <Card>
        <Text>{title}</Text>
        <Button />
      </Card>
    );
  }
}
