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
          <div className={style.showing}>
            {one} {two} {three} {four} {five}
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('5 STARS')}>
            <div>5 STARS</div>
            <div className={style.bar}>
              <div className={style.meter5}></div>
            </div> 
            <div className={style.starTotals}>1238</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('4 STARS')}>
            <div>4 STARS</div>
            <div className={style.bar}>
              <div className={style.meter4}></div>
            </div>
            <div className={style.starTotals}>900</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('3 STARS')}>
            <div>3 STARS</div>
            <div className={style.bar}>
              <div className={style.meter3}></div>
            </div>
            <div className={style.starTotals}>450</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('2 STARS')}>
            <div>2 STARS</div>
            <div className={style.bar}>
              <div className={style.meter2}></div>
            </div>
            <div className={style.starTotals}>97</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('1 STARS')}>
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