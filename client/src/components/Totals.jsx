import React from 'react';
import style from './Totals.css';

class Totals extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      filter: []
    }
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(option){
    const { one, two, three, four, five } = this.state;
    const { getFilters } = this.props;
    if(option === '1 STARS' && one === ''){
      var filterCopy = this.state.filter.slice();
      filterCopy.push(1);
      this.setState({
        one: option,
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '1 STARS' && one !== ''){
      var filterCopy = this.state.filter.slice();
      var index = filterCopy.indexOf(1);
      filterCopy.splice(index, 1);
      this.setState({
        one: '',
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '2 STARS' && two === ''){
      var filterCopy = this.state.filter.slice();
      filterCopy.push(2);
      this.setState({
        two: option,
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '2 STARS' && two !== ''){
      var filterCopy = this.state.filter.slice();
      var index = filterCopy.indexOf(2);
      filterCopy.splice(index, 1);
      this.setState({
        two: '',
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '3 STARS' && three === ''){
      var filterCopy = this.state.filter.slice();
      filterCopy.push(3);
      this.setState({
        three: option,
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '3 STARS' && three !== ''){
      var filterCopy = this.state.filter.slice();
      var index = filterCopy.indexOf(3);
      filterCopy.splice(index, 1);
      this.setState({
        three: '',
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '4 STARS' && four === ''){
      var filterCopy = this.state.filter.slice();
      filterCopy.push(4);
      this.setState({
        four: option,
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '4 STARS' && four !== ''){
      var filterCopy = this.state.filter.slice();
      var index = filterCopy.indexOf(4);
      filterCopy.splice(index, 1);
      this.setState({
        four: '',
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '5 STARS' && five === ''){
      var filterCopy = this.state.filter.slice();
      filterCopy.push(5);
      this.setState({
        five: option,
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    } else if(option === '5 STARS' && five !== ''){
      var filterCopy = this.state.filter.slice();
      var index = filterCopy.indexOf(5);
      filterCopy.splice(index, 1);
      this.setState({
        five: '',
        filter: filterCopy
      }, () => getFilters(this.state.filter))
    }
  }

  render(){
    const { one, two, three, four, five } = this.state;
    return(
      <div>
        
        
        
        <div className={style.container}>
          <div className={style.score}>4.7</div>
          <div className={style.totals}>
            <div className={style.stars}>
              <div className={style.emptyStars}></div>
              <div className={style.fullStars}></div>
            </div>
            <div className={style.numberRatings}>
                6328 Reviews  
            </div>
          </div>
        </div>



        <div className={style.ratings}>
          <div className={style.breakdown}>RATING BREAKDOWN</div>
          {this.state.filter.length > 0 &&
            <div className={style.showing}>
              Showing reviews: <span className={style.bold}>
               {one} {two} {three} {four} {five}
              </span>
              <div className={style.underline}>Remove all filters</div>
            </div>
          }
          <div className={style.barContainer} onClick={() => this.handleFilter('5 STARS')}>
            <div className={style.underline}>5 STARS</div>
            <div className={style.bar}>
              <div className={style.meter5}></div>
            </div> 
            <div className={style.starTotals}>1238</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('4 STARS')}>
            <div className={style.underline}>4 STARS</div>
            <div className={style.bar}>
              <div className={style.meter4}></div>
            </div>
            <div className={style.starTotals}>900</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('3 STARS')}>
            <div className={style.underline}>3 STARS</div>
            <div className={style.bar}>
              <div className={style.meter3}></div>
            </div>
            <div className={style.starTotals}>450</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('2 STARS')}>
            <div className={style.underline}>2 STARS</div>
            <div className={style.bar}>
              <div className={style.meter2}></div>
            </div>
            <div className={style.starTotals}>97</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('1 STARS')}>
            <div className={style.underline}>1 STARS</div>
            <div className={style.bar}>
              <div className={style.meter1}></div>
            </div>
            <div className={style.starTotals}>45</div>
          </div>
        </div>
          <div>
            <div className={style.recommend}>97%</div>
            <div className={style.text}>of customers recommend this product</div>
          </div>
          <Fit />
      </div>
    )
  }
}

var Fit = (props) => {
  return(
    <div>
      <div className={style.label}>SIZE</div>
      <div className={style.fitBarContainer}>
        <div className={style.triangleDown}></div>
        <div className={style.fitBar}>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
        </div>
      </div>
      <div className={style.fitRatingsContainerThree}>
        <div className={style.fitRatingsLeft}>TOO SMALL</div>
        <div className={style.fitRatingsCenter}>PERFECT</div>
        <div className={style.fitRatingsRight}>TOO LARGE</div>
      </div>
      <div className={style.label}>WIDTH</div>
      <div className={style.fitBarContainer}>
        <div className={style.triangleDown}></div>
        <div className={style.fitBar}>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
        </div>
      </div>
      <div className={style.fitRatingsContainerThree}>
        <div className={style.fitRatingsLeft}>TOO NARROW</div>
        <div className={style.fitRatingsCenter}>PERFECT</div>
        <div className={style.fitRatingsRight}>TOO WIDE</div>
      </div>
      <div className={style.label}>COMFORT</div>
      <div className={style.fitBarContainer}>
        <div className={style.triangleDown}></div>
        <div className={style.fitBar}>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
        </div>
      </div>
      <div className={style.fitRatingsContainerTwo}>
        <div className={style.fitRatingsLeft}>UNCOMFORTABLE</div>
        <div className={style.fitRatingsRight}>COMFORTABLE</div>
      </div>
      <div className={style.label}>QUALITY</div>
      <div className={style.fitBarContainer}>
        <div className={style.triangleDown}></div>
        <div className={style.fitBar}>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
          <div className={style.fitBarQuarters}></div>
        </div>
      </div>
      <div className={style.fitRatingsContainerTwo}>
        <div className={style.fitRatingsLeft}>POOR</div>
        <div className={style.fitRatingsRight}>PERFECT</div>
      </div>
    </div>

  )
}

export default Totals;