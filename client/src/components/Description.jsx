import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class Description extends Component {
  static showMoreLess() {
    if ($('#description').hasClass('expander')) {
      $('#description').removeClass('expander');
      $('.showMoreLess').html('Show Less');
      $('.linkIcon').removeClass('expandedArrow');
      $('.linkIcon').addClass('collapsedArrow');
    } else {
      $('#description').addClass('expander');
      $('.showMoreLess').html('Continue Reading');
      $('.linkIcon').removeClass('collapsedArrow');
      $('.linkIcon').addClass('expandedArrow');
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      listingAgent: '',
      listingFirm: '',
      lastChecked: '',
      lastUpdated: '',
      source: '',
    };
    // this.showMoreLess = this.showMoreLess.bind(this);
  }

  componentDidMount() {
    axios.get('/description')
      .then((data) => {
        const desc = data.data.document;
        console.log(desc);
        Object.keys(desc).forEach((key) => {
          this.setState({ [key]: desc[key] });
        });
      })
      .catch((err) => {
        console.log('error fetching description', err);
      });
  }

  render() {
    const { description } = this.state;
    const { listingAgent } = this.state;
    const { listingFirm } = this.state;
    const { lastChecked } = this.state;
    const { lastUpdated } = this.state;
    const { source } = this.state;

    return (
      <div>
        <div id='description' className='expander'>
          <p className='descPara'>{ description }</p>
          <div id='realtorInfo'>
            <p>
              {`Listed by ${listingAgent} • ${listingFirm} Realty`}
            </p>
            <p>
              {`Redfin last checked: ${lastChecked} hours ago | Last updated ${lastUpdated} • Source: ${source}`}
            </p>
          </div>
        </div>
        <div className='showHideContainer expanded'>
          <span className='contReadingLink'>
            <div className='showMoreLess' onClick={Description.showMoreLess} onKeyPress={this.handdleKeyPress} role='button' tabIndex={0}>Continue reading</div>
            <svg className='linkIcon expandedArrow'>
              <svg viewBox='0 0 24 24'>
                <path d='M16.116 14.53L12 10.414 7.884 14.53a.25.25 0 0 1-.354 0l-1.06-1.06a.25.25 0 0 1 0-.354l5.353-5.353a.25.25 0 0 1 .354 0l5.353 5.353a.25.25 0 0 1 0 .354l-1.06 1.06a.25.25 0 0 1-.354 0' fillRule='evenodd' />
              </svg>
            </svg>
          </span>
        </div>
      </div>
    );
  }
}
