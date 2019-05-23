import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import style from './Reviews.css';
import Axios from 'axios';
import filter from '../../../filterHelper.js';

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'relevant',
      list: [],
      filteredList: [],
      id: 6,
      numberDisplayed: 2
    }
    this.changeView = this.changeView.bind(this);
    this.updateFilteredList = this.updateFilteredList.bind(this);
    this.updateNumberDisplayed = this.updateNumberDisplayed.bind(this);
  }

  componentDidMount(){
    Axios
    .get('/reviews', {params: {productId: this.state.id}})
    .then(({ data }) => {
      data.sort((a, b) => {
        return b.rating - a.rating || b.relevant - a.relevant
      })
      this.setState({
        list: data,
        filteredList: data
      }, () => {console.log(this.state.list)})
    })
    .catch(err => console.log('error in ajax get'))
  }

  componentDidUpdate(prevProps){
    if (this.props.filters !== prevProps.filters) {
      this.updateFilteredList();
    }
  }

  updateFilteredList(){
    var newFilteredList = filter(this.state.list, this.props.filters);
    if(this.props.filters.length === 0){
      var listCopy = this.state.list.slice();
      this.setState({
        filteredList: listCopy
      })
    } else {
      this.setState({
        filteredList: newFilteredList
      }, () => console.log(this.state.filteredList))
    }
  }

  updateNumberDisplayed(){
    var newDisplayNumber = this.state.numberDisplayed;
    newDisplayNumber += 5;
    this.setState({
      numberDisplayed: newDisplayNumber
    })
  }

  changeView(option){
    var copy = this.state.filteredList.slice();
    if(option === 'helpful'){
      copy.sort((a, b) => {
        return b.rating - a.rating || b.helpful - a.helpful
      })
    } else if(option === 'newest'){
      copy.sort((a, b) => {
        return b.rating - a.rating || new Date(b.date).getTime() - new Date(a.date).getTime();
      })
    } else if(option = 'relevant'){
      copy.sort((a, b) => {
        return b.rating - a.rating || b.relevant - a.relevant
      })
    }
    this.setState({
      view: option,
      filteredList: copy
    })
  }
 
  render(){
    const { numberDisplayed, filteredList, view } = this.state;
    return(
      <div>
        Sort On
        <div className={style.sortBox}>
          <div className={view === 'relevant'
          ? style.selected
          : style.unselected}
          onClick={() => this.changeView('relevant')}
          >RELEVANT</div>
          <div className={view === 'helpful'
          ? style.selected
          : style.unselected}
          onClick={() => this.changeView('helpful')}
          >HELPFUL</div>
          <div className={view === 'newest'
          ? style.selected
          : style.unselected}
          onClick={() => this.changeView('newest')}
          >NEWEST</div>
        </div>
        <div>
          {filteredList.slice(0, numberDisplayed).map(review => {
            return <ReviewEntry review={review}/>
          })}
        </div>
        <div className={style.bottomContainer}>
          <div className={style.loadMore} onClick={this.updateNumberDisplayed}>LOAD MORE</div> <div className={style.writeReview}>WRITE A REVIEW</div>
        </div>
      </div>
    )
  }
}

export default Reviews;