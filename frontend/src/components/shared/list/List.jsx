import React from 'react'
import ListItem from '../listItem/ListItem'

const List = ({data}) => {
   
      
 
 
    return (
    <div> {data.map((content) =>(
        <div key={content.id} lg={3} md={4} sm={6} xs={12}>
            <ListItem title={content.title}/>
        </div>
    ))}</div>
  )
}

export default List