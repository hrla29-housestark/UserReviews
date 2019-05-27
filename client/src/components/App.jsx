import React from 'react';
import style from './App.css';
import Totals from './Totals.jsx';
import Reviews from './Reviews.jsx';
import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterBy: [],
      ratings: []
    }
    this.getFilters = this.getFilters.bind(this);
    this.fetchRatings = this.fetchRatings.bind(this);
  }

  componentDidMount(){
    this.fetchRatings();
  }

  fetchRatings(){
    const { id } = this.props;
    Axios
      .get('/ratings', {params: {productId: id}})
      .then(({ data }) => {
        this.setState({
          ratings: data
        }, () => console.log(this.state.ratings))
      })
      .catch(err => console.log('error in fetch ratings'))
  }

  getFilters(filters){
    this.setState({
      filterBy: filters
    }, () => console.log(this.state.filterBy))
  }

  render(){
    return(
      <div>
        <div><h3>RATINGS & REVIEWS</h3></div> 
        <div className={style.container}>
        {this.state.ratings.length !== 0 &&
          <div className={style.totals}><Totals ratings={this.state.ratings} getFilters={this.getFilters} /></div>
        }
        <div className={style.reviews}><Reviews id={this.props.id} filters={this.state.filterBy}/></div>
        </div>
      </div>
    )
  }
}

export default App;