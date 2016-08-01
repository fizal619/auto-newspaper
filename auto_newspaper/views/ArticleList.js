import React, { Component } from 'react';
import { Card, CardItem, Text, List, ListItem} from 'native-base';


const ArticleList =props=> {

  // console.log(props.news.length)

  function update(e){
    props.update(e)
  }

  return (
    <List dataArray={props.news}
      renderRow={(item, id) =>
        <ListItem>
          <Text onPress={()=>update(item)}>{item.title}</Text>
        </ListItem>
    }>

    </List>
    )

}

export default ArticleList
