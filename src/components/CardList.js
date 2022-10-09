import React from 'react';
import Card from './card';

const CardList = ({robots})=> {
     return (
       <div>
    {
    // Map Method
     robots.map((users , index) =>{
       const {id,name,email,} = users;
        return (<Card 
          key= {index}
          id = {id}
          name = {name} 
          email = {email}
        />
    );
      })
    }
      </div>
     )  
}
export default CardList;