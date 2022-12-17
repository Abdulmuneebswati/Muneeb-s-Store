import React from 'react';
import Chart from '../../components/chart/Chart'
import Feature from '../../components/featureChart/Feature'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import List from '../../components/table/List'
import Widget from '../../components/widgets/Widget'
import "./home.scss"
const Home = () => {
  return (    
    <div className='home'>
      {/* <Navbar/> */}
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>

        </div>
        <div className="charts">
          <Feature/>
          <Chart title="Last 6 Months (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home
