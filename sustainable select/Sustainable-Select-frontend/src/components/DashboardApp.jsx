import React, { Component } from "react";
import BarChart from "./BarChart";
import Doughnut from "./Doughnut";
import "./DashboardApp.css";
import GaugeChart from "react-gauge-chart";
import MainNavbar from "./MainNavbar";
import StockChart from "./StockChart";

class DashboardApp extends Component {
  render() {
    return (
      <div className="dasboardapp">
        <MainNavbar/>
        <StockChart/>
        <div className="sub-wrapper">
          <div className="sub chart-wrapper">
            <BarChart
              data={[{"label": "rewards", value: 31},{"label": "Target points", value: 60}]}
              title={'Rewards Accumulated'}
              color="#ff6e54"
            />
          </div>
          <GaugeChart id="gauge-chart2" 
            nrOfLevels={10} hideText={true}
            colors={["#FF5F6D", "#FFC371"]}  
            textColor={'black'} 
          /><p className="im">&euro; 1298</p>
          <div className="sub chart-wrapper doughnut">
            <Doughnut
              data={[{"label": "savings", value: 31},{"label": "investments", value: 14},
              {"label": "bills", value: 20},{"label": "rent", value: 10},
              {"label": "travel", value: 20},{"label": "grocery", value: 15}]}//{this.state.feeds[2].data}
              title={'Data 4'}//{this.state.feeds[2].title}
              colors={[
                "#003f5c",
                "#444e86",
                "#955196",
                "#dd5182",
                "#ff6e54",
                "#ffa600",
              ]}
            />
          </div>
       </div>
      </div>
    );
  }
}

export default DashboardApp;
