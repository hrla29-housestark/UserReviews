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
          4.7
        </div>
          <div className={style.ratings}>
          <h2>RATING BREAKDOWN</h2> <br/>
          5 Stars<div className={style.bar}>
            <div className={style.meter5}></div>
          </div> 
          4 Stars<div className={style.bar}>
            <div className={style.meter4}></div>
          </div>
          3 Stars<div className={style.bar}>
            <div className={style.meter3}></div>
          </div>
          2 Stars<div className={style.bar}>
            <div className={style.meter2}></div>
          </div>
          1 Star<div className={style.bar}>
            <div className={style.meter1}></div>
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