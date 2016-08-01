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

import { Container, Header, Icon, Title, Content, Button, Text } from 'native-base';


import ArticleList from './views/ArticleListAndroid'
import Article from './views/ArticleAndroid'

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

    let myHeaders = new Headers({
      "Referer": "https://peaceful-forest-67246.herokuapp.com/",
      "Origin": "https://peaceful-forest-67246.herokuapp.com/",
      "Access-Control-Allow-Origin": "https://peaceful-forest-67246.herokuapp.com/",
    })

    let options = {
      mode: 'cors',
      headers: myHeaders
    }

    console.log('Number 1')
    fetch('https://peaceful-forest-67246.herokuapp.com/news', options).then(data=> data.json()).then(res=>{
      this.setState({
        news: res
      }).catch(err=>{
        console.log('Number 2')

        console.log(err)
      })
      console.log(res.length)
      try {

        AsyncStorage.setItem("articles", JSON.stringify(res));
      } catch (error) {
        console.log('Number 3')

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
