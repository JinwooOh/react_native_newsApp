/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Article from './src/components/Article';
import { getNews } from './src/util/news';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true,
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  };

  fetchNews = () => {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  };

  render() {
    console.log(this.state.articles);
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <Article article={item} />}
          keyExtractor={item => item.url}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </SafeAreaView>
    );
  }
}
