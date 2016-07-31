/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Container, Header, Button, Icon, Title, Content } from 'native-base';


import ArticleList from './views/ArticleList'

class auto_newspaper extends Component {

  constructor(){
    super();

    this.state ={
      news: [{
        title: 'loading',
        content: 'loading'
      }],
      article: false,
      which_article: 0
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/news').then(data=> data.json()).then(res=>{
      this.setState({
        news: res
      })
      console.log(res.length)
    })
  }

  render() {

    let VIEW

    if(this.state.article){
      VIEW = <ArticleList news={this.state.news} />
    }else{
      VIEW = <Article news={this.state.news[this.state.which_article]} />
    }

    return (
      <Container>
      <Header>
        <Button transparent>
         Back
        </Button>
        <Title>Latest News</Title>
        <Button transparent>
         Refresh
        </Button>
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
