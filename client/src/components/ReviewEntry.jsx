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
          <div className={style.date}>{moment(date).format('MMMM D, YYYY')}</div>
        </div>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.body}>
          {body} 
        </div>
        {recommend === true &&
          <div className={style.recommend}>&#10003; I recommend this product</div>
        }
        <span className={style.user}>{userName}</span>
        {verified === true &&
          <span className={style.verified}> - Verified Purchaser</span>  
        }
        <div className={style.helpful}>Was this review helpful? <span className={style.confirm}>Yes</span> ({helpful}) <span className={style.confirm}>No</span> ({notHelpful})</div>
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