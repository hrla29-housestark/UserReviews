import React from 'react';
import style from './App.css';
import Totals from './Totals.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterBy: []
    }
    this.getFilters = this.getFilters.bind(this);
  }

  getFilters(filters){
    this.setState({
      filterBy: filters
    }, () => console.log(this.state.filterBy))
  }

  render(){
    return(
      <div>
        <div><h3 className={style.title}>RATINGS & REVIEWS</h3></div> 
        <div className={style.container}>
        <div className={style.totals}><Totals getFilters={this.getFilters} /></div>
        <div className={style.reviews}><Reviews filters={this.state.filterBy}/></div>
        </div>
      </div>
    )
  }
}

export default App;