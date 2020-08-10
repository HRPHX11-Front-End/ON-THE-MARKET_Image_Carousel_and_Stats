import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';




export default class Description extends Component {
  constructor (props) {
    super(props);
    this.state = {
      _id: '',
      __v: 0,
      description: '',
      listingAgent: '',
      listingFirm: '',
      lastChecked: '',
      lastUpdated: '',
      source: '',
    }
    this.showMoreLess = this.showMoreLess.bind(this);
    this.randomDescriptions = this.randomDescription.bind(this);
  }

  componentDidMount() {
    axios.get('/description')
      .then(data => {
        let desc = data.data.document;
        for (var key in desc) {
          this.setState({ [key]: desc[key] })
        }
      })
      .catch(err => {
        console.log('error fetching description')
      })
  }

  randomDescription() {
    let tenDescriptions = []
    return tenDescriptions = tenDescriptions[Math.floor(Math.random() * tenDescriptions.length)]
  }

  showMoreLess() {
    if ($('#description').hasClass("expander")) {
      $('#description').removeClass("expander");
      $('.showMoreLess').html('Show Less');
      $('.linkIcon').removeClass('expandedArrow');
      $('.linkIcon').addClass('collapsedArrow');
      }
      else {
        $('#description').addClass("expander");
        $('.showMoreLess').html('Continue Reading');
        $('.linkIcon').removeClass('collapsedArrow');
        $('.linkIcon').addClass('expandedArrow');
      }
  }



  render() {
    return (
     <div>
      <div id='description' className='expander'>
        <p className="descPara">{this.state.description}</p>
        <div id='realtorInfo'>
          <p>Listed by {this.state.listingAgent} • {this.state.listingFirm} Realty</p>
          <p>Redfin last checked: {this.state.lastChecked} hours ago | Last updated {this.state.lastUpdated} • Source: {this.state.source}</p>
        </div>
      </div>
      <div className='showHideContainer expanded'>
        <span className='contReadingLink'>
          <p className='showMoreLess' onClick={this.showMoreLess}>Continue reading</p>
          <svg className='linkIcon expandedArrow'>
            <svg viewBox="0 0 24 24">
                <path d="M16.116 14.53L12 10.414 7.884 14.53a.25.25 0 0 1-.354 0l-1.06-1.06a.25.25 0 0 1 0-.354l5.353-5.353a.25.25 0 0 1 .354 0l5.353 5.353a.25.25 0 0 1 0 .354l-1.06 1.06a.25.25 0 0 1-.354 0" fillRule="evenodd"></path>
            </svg>
          </svg>
        </span>
      </div>
    </div>
    )
  }
}