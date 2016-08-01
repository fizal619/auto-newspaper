import React, { Component } from 'react';
import { Card, CardItem, Text, List, ListItem, Button, Content} from 'native-base';


const Article =props=> {

  // console.log(props.article.length)


  return (
    <Content>
    <Card>
      <CardItem header>
        <Text>{props.article.title.slice(0, 44) + '...'}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.article.content}</Text>
      </CardItem>
    </Card>
    <Text></Text>
    <Button style={{width:100, height: 50}} primary onPress={props.reset} >Back</Button>
    </Content>
    )

}

export default Article
