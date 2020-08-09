import React, { Component } from 'react';
import axios from 'axios';


export default class Stats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      _id: '',
      __v: 0,
      listPrice: 0,
      estPayment: 0,
      priceSqFt: 0,
      status: true,
      timeOnRedfin: 0,
      propertyType: '',
      yearBuilt: '',
      style: '',
      community: '',
      lotSize: 0,
      mlsNum: 0
    }
  }

  componentDidMount() {
    axios.get('/stats')
      .then(data => {
        let stats = data.data.stats;
        console.log('stats', stats);
        for (var key in stats) {
          console.log(key)
          this.setState({ [key]: stats[key] })
        }
        //console.log('stats', this.state.stats)

      })
      .catch(err => {
        console.log('error fetching description')
      })
  }

  render() {
    return (
     <div>
     <p className='statsTitle' style={{fontWeight: '900'}}>Price Insights</p>
     <div className='piContainer'>
       <div className='statEntry'>
        <span className='statName'>List Price</span>
        <span className='statVal'>${this.state.listPrice}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Est. Mo. Payment</span>
        <span className='statVal'>${this.state.estPayment}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Price/Sq.Ft.</span>
        <span className='statVal'>${this.state.priceSqFt} </span>
       </div>
     </div>
     <p className='statsTitle' style={{fontWeight: '900'}}>Home Facts</p>
     <div className='piContainer'>
       <div className='statEntry'>
        <span className='statName'>Status</span>
        <span className='statVal'>{this.state.status}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Time on Redfin</span>
        <span className='statVal'>{this.state.timeOnRedfin} days</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Property Type</span>
        <span className='statVal'>{this.state.propertyType}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Year Built</span>
        <span className='statVal'>{this.state.yearBuilt}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Style</span>
        <span className='statVal'>{this.state.style}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Community</span>
        <span className='statVal'>{this.state.community}</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>Lot Size</span>
        <span className='statVal'>{this.state.lotSize} Sq. Ft.</span>
       </div>
       <div className='statEntry'>
        <span className='statName'>MLS#</span>
        <span className='statVal'>{this.state.mlsNum}</span>
       </div>
     </div>
     </div>
    )

  }
}