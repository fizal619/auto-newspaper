import React, { Component } from 'react';
import { Card, CardItem, Text, List, ListItem} from 'native-base';


const ArticleList =props=> {

  console.log(props.news.length)


  return (
    <List dataArray={props.news}
      renderRow={(item) =>
        <ListItem>
          <Text>{item.title}</Text>
        </ListItem>
    }>

    </List>
    )

}

export default ArticleList
