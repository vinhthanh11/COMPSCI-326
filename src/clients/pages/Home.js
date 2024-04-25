// Home.js
import React from 'react';
import '../styles/Home.css';
import { useEffect, useState, useRef } from 'react';

// You may need to adjust imports based on how you manage Chart.js and Moment.js in React
import moment from 'moment';
import Chart from 'chart.js/auto';

import { initChart, addChartValue, chartValues, initialNews, initialAccounts } from '../components/functions/home-functions.js';

const Home = () => {

  return (
    <div>
      <h1>Investing Summary</h1>
      <div id="total-amount-invested">
        <h1>Total amount here</h1>
      </div>
      <div className="chart-container">
        <canvas id="myChart"></canvas>
      </div>
      <div className="container">
        <div className="box">
          <div className="header">
            <h2>Accounts</h2>
          </div>
          <div className="content">
            <div className="inner-content">
              <div className="title">Student Debit Plan</div>
              <div className="amount" id="student-debit-plan"></div>
            </div>
            <div className="inner-content">
              <div className="title">Dining Dollars</div>
              <div className="amount" id="dining-dollars"></div>
            </div>
            <div className="inner-content">
              <div className="title">Investing</div>
              <div className="amount" id="investing"></div>
            </div>
            <div className="inner-content">
              <div className="title">M Unlimited DC</div>
              <div className="amount" id="dc-meals"></div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="header">
            <h2>UMass News</h2>
          </div>
          <div className="content" id="news-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
