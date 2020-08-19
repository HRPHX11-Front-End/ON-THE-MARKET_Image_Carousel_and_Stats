import React, { Component } from 'react';
import axios from 'axios';
import '../styles/styles.css';
import '../styles/carousel.css';

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      mlsNum: 0,
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3005/stats')
      .then((data) => {
        const stats = data.data.stats;
        console.log(stats);
        Object.keys(stats).forEach((key) => {
          this.setState({ [key]: stats[key] });
        });
      })
      .catch((err) => {
        console.log('error fetching description', err);
      });
  }

  render() {
    const { listPrice } = this.state;
    const { estPayment } = this.state;
    const { priceSqFt } = this.state;
    const { status } = this.state;
    const { timeOnRedfin } = this.state;
    const { propertyType } = this.state;
    const { yearBuilt } = this.state;
    const { style } = this.state;
    const { community } = this.state;
    const { lotSize } = this.state;
    const { mlsNum } = this.state;

    return (
      <div>
        <p className='statsTitle'>Price Insights</p>
        <div className='piContainer'>
          <div className='statEntry'>
            <span className='statName'>List Price</span>
            <span className='statVal'>{`$${listPrice}`}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Est. Mo. Payment</span>
            <span className='statVal'>{`$${estPayment}`}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Price/Sq.Ft.</span>
            <span className='statVal'>{`$${priceSqFt}`}</span>
          </div>
        </div>
        <p className='statsTitle'>Home Facts</p>
        <div className='piContainer'>
          <div className='statEntry'>
            <span className='statName'>Status</span>
            <span className='statVal'>{status}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Time on Redfin</span>
            <span className='statVal'>{`${timeOnRedfin} days`}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Property Type</span>
            <span className='statVal'>{propertyType}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Year Built</span>
            <span className='statVal'>{yearBuilt}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Style</span>
            <span className='statVal'>{style}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Community</span>
            <span className='statVal community'>{community}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>Lot Size</span>
            <span className='statVal'>{`${lotSize} Sq. Ft.`}</span>
          </div>
          <div className='statEntry'>
            <span className='statName'>MLS#</span>
            <span className='statVal'>{mlsNum}</span>
          </div>
        </div>
      </div>
    );
  }
}
