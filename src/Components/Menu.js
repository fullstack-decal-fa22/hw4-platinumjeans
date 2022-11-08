import React, { useState } from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
    
  const [name, setColor]= useState(false)
    
    return (
      <div className="colorOptions">
          <Color color='red' handleClick={props.addPost}/>
          <Color color='pink' handleClick={props.addPost}/>
          <Color color='blue' handleClick={props.addPost}/>
          <Color color='green' handleClick={props.addPost}/>
      </div>
    );
}

export default Menu;