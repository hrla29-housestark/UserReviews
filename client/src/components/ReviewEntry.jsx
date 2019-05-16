import React from 'react';
import style from './ReviewEntry.css';

class ReviewEntry extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className={style.firstLine}>
          <div>Rating</div>
          <div className={style.date}>Date</div>
        </div>
        <div className={style.title}>
          Super Cool
        </div>
        <div>
          I really like this shoe. I think it's cool. The color is nice. The fit is snug. Yeet. 
        </div>
        <div>&#10003; I recommend this product</div>
        <div>mhayford29 - Verified Purchaser</div>
        <div>Was this review helpful? <span>Yes</span> (0) <span>No</span> (0)</div>
      </div>
    )
  }
}

export default ReviewEntry;