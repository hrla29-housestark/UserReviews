import React from 'react';
import style from './Totals.css';

class Totals extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className={style.container}>
          <div className={style.score}><b>4.7</b></div>
          <div className={style.stars}>
            <div className={style.emptyStars}></div>
            <div className={style.fullStars}></div>
          </div>
            <div className={style.numberRatings}>
              Ratings: 6328
            </div>
        </div>
        <div className={style.ratings}>
          <h2>RATING BREAKDOWN</h2> <br/>
          <div className={style.barContainer}>
            <div>5 STARS</div>
            <div className={style.bar}>
              <div className={style.meter5}></div>
            </div> 
            <div className={style.starTotals}>1238</div>
          </div>
          <div className={style.barContainer}>
            <div>4 STARS</div>
            <div className={style.bar}>
              <div className={style.meter4}></div>
            </div>
            <div className={style.starTotals}>900</div>
          </div>
          <div className={style.barContainer}>
            <div>3 STARS</div>
            <div className={style.bar}>
              <div className={style.meter3}></div>
            </div>
            <div className={style.starTotals}>450</div>
          </div>
          <div className={style.barContainer}>
            <div>2 STARS</div>
            <div className={style.bar}>
              <div className={style.meter2}></div>
            </div>
            <div className={style.starTotals}>97</div>
          </div>
          <div className={style.barContainer}>
            <div>1 STARS</div>
            <div className={style.bar}>
              <div className={style.meter1}></div>
            </div>
            <div className={style.starTotals}>45</div>
          </div>
        </div>
          <div className={style.recommend}>
            <h1>97%</h1>
            of customers recommend this product
          </div>
      </div>
    )
  }
}

export default Totals;