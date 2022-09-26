import React from 'react';

const Card = ({name,id,email}) => {
// Different Use ES6
// const {name,email,id} = props;
return (
  
    <div className=" tc bg-light-green dib  br3 pa3 ma2 grow  bw2 shadow-5">
        {/* CSS tachyons */}

        <img  alt = 'robots 'src = {`https://robohash.org/${id}?200x200`}/>
        {/* Random İmage APİ */}
        <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
)
}
export default Card;