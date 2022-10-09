import React from 'react';

const Scroll = (props)=> {
    return <div style={{overflow: 'scroll',border: '5px solid darkblue',height: '800px',margin:'5px'}}>
    {props.children}
    </div>
}
export default Scroll;