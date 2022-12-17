import React, { useContext } from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import darkModeContext from '../../context/darkModeContext';



const Sidebar = () => {
  const{darkMode} = useContext(darkModeContext);
  return (
    <div className='sidebar'>
    {/* top */}
      <div className="top">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Muneeb's Store</span></Link>
      </div>
<hr />

    {/* center */}
      <div className="center">
        <ul>
       <p className="title">MAIN</p>    <li> <DashboardIcon className='icon'/> <span>DashBoard</span></li>
       <p className="title">LISTS</p>   
       <Link to="/users" style={{textDecoration:"none"}}> <li><PersonOutlinedIcon className='icon'/> <span>Users</span></li></Link>
       <Link to="/products" style={{textDecoration:"none"}}><li><ProductionQuantityLimitsOutlinedIcon className='icon'/> <span>Products</span></li> </Link>
       <Link to="/users" style={{textDecoration:"none"}}> <li><ShoppingBagOutlinedIcon className='icon'/><span>Orders</span></li></Link>
      <li><LocalShippingOutlinedIcon className='icon'/><span>Delivery</span></li>
       <p className="title">USEFUL</p>    <li> <BarChartOutlinedIcon className='icon'/><span>Stats</span></li>
                                           <li><NotificationsNoneOutlinedIcon className='icon'/><span>Notifications</span></li>
       <p className="title">SERVICE</p>    <li><SpaOutlinedIcon className='icon'/><span>System Health</span></li>
                                            <li><PsychologyAltOutlinedIcon className='icon'/><span>Logs</span></li>
                                            <li><SettingsApplicationsOutlinedIcon className='icon'/><span>Settings</span></li>
       <p className="title">USER</p>    <li><AccountCircleOutlinedIcon className='icon'/><span>Profile</span></li>
       <p className="title"></p>    <li><LogoutOutlinedIcon className='icon'/><span>Logout</span></li>

        </ul>
      </div>

      {/* bottom */}
      <div className="bottom">
        <div className="colorOption" onClick={()=>darkMode("LIGHT")}></div>
        <div className="colorOption" onClick={()=>darkMode("DARK")}></div>
      </div>
    </div>
  )
}

export default Sidebar
