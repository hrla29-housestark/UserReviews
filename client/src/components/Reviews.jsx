import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import style from './Reviews.css';

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'relevant',
      list: []
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(option){
    this.setState({
      view: option
    })
  }
 
  render(){
    const { view } = this.state;
    return(
      <div>
        Sort On
        <div className={style.sortBox}>
          <div className={view === 'relevant'
          ? style.selected
          : style.unselected}
          onMouseOver={style.hover}
          onClick={() => this.changeView('relevant')}
          >RELEVANT</div>
          <div className={view === 'helpful'
          ? style.selected
          : style.unselected}
          onMouseOver={style.hover}
          onClick={() => this.changeView('helpful')}
          >HELPFUL</div>
          <div className={view === 'newest'
          ? style.selected
          : style.unselected}
          onMouseOver={style.hover}
          onClick={() => this.changeView('newest')}
          >NEWEST</div>
        </div>
        <div>
          <ReviewEntry />
        </div>
      </div>
    )
  }
}

export default Reviews;