import React from 'react'
import ListItem from '../listItem/ListItem'

const List = ({data}) => {
   
      
 
 
    return (
    <div> {data.content.map((content) =>(
        <div key={content.token} lg={3} md={4} sm={6} xs={12}>
            <ListItem title={product}/>
        </div>
    ))}</div>
  )
}

export default List