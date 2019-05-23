import React from 'react';
import style from './ReviewEntry.css';
import moment from 'moment';

class ReviewEntry extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { body, helpful, notHelpful, rating, title, recommend, verified, userName, date } = this.props.review;
    return(
      <div className={style.review}>
        <div className={style.firstLine}>
          <div className={style.rating}><Rating rating={rating} /></div>
          <div className={style.date}>{moment(date).format('MMMM d, YYYY')}</div>
        </div>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.body}>
          {body} 
        </div>
        <div className={style.recommend}>&#10003; I recommend this product</div>
        <div className={style.user}>{userName} - Verified Purchaser</div>
        <div className={style.helpful}>Was this review helpful? <span>Yes</span> ({helpful}) <span>No</span> ({notHelpful})</div>
      </div>
    )
  }
}

class Rating extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const { rating } = this.props;
    return(
      <div>
        {rating === 1 &&
        <OneStar />}
        {rating === 2 &&
        <TwoStar />}
        {rating === 3 &&
        <ThreeStar />}
        {rating === 4 &&
        <FourStar />}
        {rating === 5 &&
        <FiveStar />}
      </div>
    )
  }
}

var OneStar = () => (
  <div>
    &#9733;&#9734;&#9734;&#9734;&#9734;
  </div>
)

var TwoStar = () => (
  <div>
    &#9733;&#9733;&#9734;&#9734;&#9734;
  </div>
)

var ThreeStar = () => (
  <div>
    &#9733;&#9733;&#9733;&#9734;&#9734;
  </div>
)

var FourStar = () => (
  <div>
    &#9733;&#9733;&#9733;&#9733;&#9734;
  </div>
)

var FiveStar = () => (
  <div>
    &#9733;&#9733;&#9733;&#9733;&#9733;
  </div>
)

export default ReviewEntry;