import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import style from './Reviews.css';

class Reviews extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div >
        Sort On
        <div className={style.sortBox}>
          <div className={style.relevant}>Relevant</div>
          <div className={style.helpful}>Helpful</div>
          <div className={style.newest}>Newest</div>
        </div>
        <div>
          <ReviewEntry />
        </div>
      </div>
    )
  }
}

export default Reviews;