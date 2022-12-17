import React, { useContext } from 'react'
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { ChatBubbleOutlineOutlined, FullscreenExitOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material';
import darkModeContext from '../../context/darkModeContext';
const Navbar = () => {
  const {darkMode} = useContext(darkModeContext);
  return (

    <div className='navbar'>
      <div className="wrapper">
        <div className="searchbar">
          <input type="text" placeholder='Search...' />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item"><LanguageOutlinedIcon className='icon'/></div>
          <div className="item"><DarkModeOutlinedIcon className='icon' onClick={()=>darkMode("TOGGLE")}/></div>
          <div className="item"><FullscreenExitOutlined className='icon'/></div>
          <div className="item">
          <NotificationsNoneOutlined className='icon'/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineOutlined className='icon'/>
          <div className="counter">2</div>
          </div>
          <div className="item"><ListOutlined className='icon'/></div>
          <div className="item">
            <img className='avatar' src="https://images.pexels.com/photos/13366951/pexels-photo-13366951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
