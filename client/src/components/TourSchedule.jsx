import React from 'react';
import '../styles/styles.css';
import '../styles/carousel.css';

export default function TourSchedule() {
  return (
    <div id='sBContainer'>
      <h1 className='goTour'>Go Tour This Home</h1>
      <div id='dateContainer'>
        <div type='input' className='dateBoxes'>
          <div className='dateInfo'>FRIDAY</div>
          <div className='dateNumber'>14</div>
          <div className='dateInfo'>Aug</div>
        </div>
        <div type='input' className='dateBoxes'>
          <div className='dateInfo'>SATURDAY</div>
          <div className='dateNumber'>15</div>
          <div className='dateInfo'>Aug</div>
        </div>
        <div type='input' className='dateBoxes'>
          <div className='dateInfo'>SUNDAY</div>
          <div className='dateNumber'>16</div>
          <div className='dateInfo'>Aug</div>
        </div>
        <button type='button' aria-label='next slide / item' className='tourArrow'>
          V
        </button>
      </div>
      <div id='tourVia'>
        <div type='input' className='tour'>Tour in Person</div>
        <div type='input' className='tour'>Tour via Video Chat</div>
      </div>
      <div id='scheduleTour'>Schedule Tour</div>
      <div className='noOb'>It's free with no obligation - cancel anytime</div>
      <div className='or'> - OR - </div>
      <div id='startOffer'>Start an Offer</div>
      <div className='buyWithRedfin'>
        <div className='noOb'>
          Buy with a Redfin Agent and get $3058 back
        </div>
        <svg className='infoIcon'>
          <svg viewBox='0 0 24 24'>
            <path d='M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm1 16v-5.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25V12h1v4h-1v1.75c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V16h-1zm-.25-8h-1.5a.25.25 0 0 1-.25-.25v-1.5a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25z' />
          </svg>
        </svg>
      </div>
      <div className='askQuestion'>
        <div className='seperator'>
          <div className='askQ'>Ask a Question</div>
        </div>
        <div className='seperator'>
          <div className='phoneQ'>(480) 268-6227</div>
        </div>
      </div>
    </div>
  );
}
