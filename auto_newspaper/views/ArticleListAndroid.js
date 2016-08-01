import React, { Component } from 'react';
import { Card, CardItem, Text, List, ListItem, Content, Button} from 'native-base';


const ArticleList =props=> {

  // console.log(props.news.length)

  function update(e){
    props.update(e)
  }

  return (
    <Content>
    <List dataArray={props.news}
      renderRow={(item) =>
        <ListItem>
          <Text onPress={()=>update(item)}>{item.title}</Text>
        </ListItem>
    }>

    </List>
    <Text></Text>
      <Button style={{width:100, height: 50}} primary onPress={props.refresh} >Refresh</Button>

    </Content>
    )

}

export default ArticleList
