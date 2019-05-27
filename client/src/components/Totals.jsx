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
      filter: [],
      hoverView: ''
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  resetFilters(){
    const { getFilters } = this.props;
    this.setState({
      filter: [],
      one: '',
      two: '',
      three: '',
      four: '',
      five: ''
    }, () => getFilters(this.state.filter))
  }

  toggleHover(option){
    this.setState({
      hoverView: option
    })
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
    const { one, two, three, four, five, hoverView } = this.state;
    const { comfort, fiveStars, fourStars, oneStar, quality, recommended, size, threeStars, twoStars, width, averageRating, total} = this.props.ratings[0];
    var meter5 = {width: `${(fiveStars/total)*100}%`};
    var meter4 = {width: `${(fourStars/total)*100}%`};
    var meter3 = {width: `${(threeStars/total)*100}%`};
    var meter2 = {width: `${(twoStars/total)*100}%`};
    var meter1 = {width: `${(oneStar/total)*100}%`};
    var avg = {width: `${(averageRating*10)*2}%`};
    var black = {backgroundColor: 'black'};
    var white = {backgroundColor: 'black', color: 'white'};
    return(
      <div>
        
        
        
        <div className={style.container}>
          <div className={style.score}>{averageRating}</div>
          <div className={style.totals}>
            <div className={style.stars}>
              <div className={style.emptyStars}></div>
              <div style={avg} className={style.fullStars}></div>
            </div>
            <div className={style.numberRatings}>
                {total} <span className={style.text}>Reviews</span>  
            </div>
          </div>
        </div>



        <div className={style.ratings}>
          <div className={style.breakdown}>RATING BREAKDOWN</div>
          {this.state.filter.length > 0 &&
            <div className={style.showing}>
              <span>Showing reviews:</span> <span className={style.bold}>
               {one} {two} {three} {four} {five}
              </span>
              <div className={style.removeFilters}>
                <span style={hoverView === 'filter' ? white : null}
                  onClick={this.resetFilters}
                  onMouseEnter={() => this.toggleHover('filter')}
                  onMouseLeave={() => this.toggleHover('')}>Remove all filters</span>
              </div>
            </div>
          }

          <div className={style.barContainer} onClick={() => this.handleFilter('5 STARS')}>
            <div className={style.underline}>
              <span style={hoverView === 'five' ? black : null}
                onMouseEnter={() => this.toggleHover('five')}
                onMouseLeave={() => this.toggleHover('')}
              >5 STARS</span>
            </div>
            <div className={style.bar}>
              <div style={meter5} className={style.meter5}></div>
            </div> 
            <div className={style.starTotals}>{fiveStars}</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('4 STARS')}>
            <div className={style.underline}>
              <span style={hoverView === 'four' ? black : null}
                onMouseEnter={() => this.toggleHover('four')}
                onMouseLeave={() => this.toggleHover('')}
              >4 STARS</span>
            </div>
            <div className={style.bar}>
              <div style={meter4} className={style.meter4}></div>
            </div>
            <div className={style.starTotals}>{fourStars}</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('3 STARS')}>
            <div className={style.underline}>
            <span style={hoverView === 'three' ? black : null}
                onMouseEnter={() => this.toggleHover('three')}
                onMouseLeave={() => this.toggleHover('')}
              >3 STARS</span>
            </div>
            <div className={style.bar}>
              <div style={meter3} className={style.meter3}></div>
            </div>
            <div className={style.starTotals}>{threeStars}</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('2 STARS')}>
            <div className={style.underline}>
            <span style={hoverView === 'two' ? black : null}
                onMouseEnter={() => this.toggleHover('two')}
                onMouseLeave={() => this.toggleHover('')}
              >2 STARS</span>
            </div>
            <div className={style.bar}>
              <div style={meter2} className={style.meter2}></div>
            </div>
            <div className={style.starTotals}>{twoStars}</div>
          </div>
          <div className={style.barContainer} onClick={() => this.handleFilter('1 STARS')}>
            <div className={style.underline}>
            <span style={hoverView === 'one' ? black : null}
                onMouseEnter={() => this.toggleHover('one')}
                onMouseLeave={() => this.toggleHover('')}
              >1 STARS</span>
            </div>
            <div className={style.bar}>
              <div style={meter1} className={style.meter1}></div>
            </div>
            <div className={style.starTotals}>{oneStar}</div>
          </div>
        </div>
          <div>
            <div className={style.recommend}>{recommended}%</div>
            <div className={style.text}>of customers recommend this product</div>
          </div>
          <Fit size={size} comfort={comfort} quality={quality} width={width}/>
      </div>
    )
  }
}

var Fit = (props) => {
  const { size, comfort, quality, width } = props;
  var sizeMeter = {left: `${size}%`}
  var comfortMeter = {left: `${comfort}%`}
  var qualityMeter = {left: `${quality}%`}
  var widthMeter = {left: `${width}%`}
  return(
    <div>
      <div className={style.label}>SIZE</div>
      <div className={style.fitBarContainer}>
        <div style={sizeMeter} className={style.triangleDown}></div>
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
        <div style={widthMeter} className={style.triangleDown}></div>
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
        <div style={comfortMeter} className={style.triangleDown}></div>
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
        <div style={qualityMeter} className={style.triangleDown}></div>
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