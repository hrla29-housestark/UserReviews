import React from 'react';
import style from './App.css';
import Totals from './Totals.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className={style.container}>
       <div className={style.totals}><Totals /></div>
       <div className={style.reviews}><Reviews /></div>
      </div>
    )
  }
}

export default App;