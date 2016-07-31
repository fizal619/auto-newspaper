import React, { Component } from 'react';
import { Card, CardItem, Text} from 'native-base';


const ArticleList =props=> {

  // function list(){
  //   props.news.forEach(item=>{
  //     render(){
  //       return(
  //         <Text>{item.title}</Text>
  //         )
  //     }
  //   })
  // }


  return (
        <Card>
          <CardItem>
            <Text> {props.news[0].title} </Text>
          </CardItem>
        </Card>
    )

}

export default ArticleList
