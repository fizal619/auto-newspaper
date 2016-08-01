/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  AsyncStorage
} from 'react-native';

import { Container, Header, Icon, Title, Content, Button } from 'native-base';


import ArticleList from './views/ArticleList'
import Article from './views/Article'

class auto_newspaper extends Component {

  constructor(){
    super();

    this.state ={
      news: [{
        title: 'Click Refresh to load articles...',
        content: 'loading'
      }],
      article: {
        title: '',
        content: ''
      }
    }
  }

  componentDidMount(){
    try {
      AsyncStorage.getItem("articles").then((value) => {
          value = JSON.parse(value)
          this.setState({news: value})
      }).done()
    } catch (error) {
      console.log(error)
    }

  }

  //MY FUNCTIONS TO MANIPULATE STATE

  selectArticle(item){
    console.log(item)
    this.setState({
      article: item
    })
  }

  reset(){
    console.log('back')
    this.setState({
      article: {
        title: '',
        content: ''
      }
    })
  }

  refresh(){
    fetch('http://localhost:3000/news').then(data=> data.json()).then(res=>{
      this.setState({
        news: res
      })
      console.log(res.length)
      try {
        AsyncStorage.setItem("articles", JSON.stringify(res));
      } catch (error) {
        console.log(error)
      }
    })
  }

  //END

  render() {

    let VIEW

    if((this.state.article.title == '')){
      VIEW = <ArticleList refresh={this.refresh.bind(this)} update={this.selectArticle.bind(this)} news={this.state.news} />
    }else{
      VIEW = <Article reset={this.reset.bind(this)} article={this.state.article} />
    }

    return (
      <Container>
      <Header>
        <Title>Latest News</Title>
      </Header>
      <Content>
        {VIEW}
      </Content>
      </Container>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('auto_newspaper', () => auto_newspaper);
