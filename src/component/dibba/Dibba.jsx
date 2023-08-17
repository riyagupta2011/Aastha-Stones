import React from 'react'
import "./Dibba.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
const Dibba = () => {
  return (
   <div className="dibba">
    <div className="innerdibba">
        <div className="icons">
             <HomeOutlinedIcon style={{ fontSize: '100px', color: 'rgb(194 156 108)' }}/>
             <p>High Quality</p>
             </div>
        <div className="icons"><Diversity3OutlinedIcon style={{ fontSize: '100px', color: 'rgb(194 156 108)' }}/><p>Expert Team</p></div>
        <div className="icons"> <StarBorderPurple500OutlinedIcon style={{ fontSize: '100px', color: 'rgb(194 156 108)' }}/><p>Best Rates</p></div>
        <div className="icons"><AccountBalanceOutlinedIcon style={{ fontSize: '100px', color: 'rgb(194 156 108)' }}/><p>Sustainable Accountable</p></div>
     
      
       
      
       
    </div>
   </div>
  )
}

export default Dibba