import React, { Component } from 'react';
import { Card, CardItem, Text, List, ListItem} from 'native-base';


const Article =props=> {

  // console.log(props.article.length)


  return (
    <Card>
      <CardItem header>
        <Text>{props.article.title.slice(0, 44) + '...'}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.article.content}</Text>
      </CardItem>
    </Card>
    )

}

export default Article
