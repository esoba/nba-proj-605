import React from 'react'
import './topbar.css'
import {NotificationAddOutlined} from "@mui/icons-material" 

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topleft">
                <span className="logo">LeSoba</span>
            </div>
        </div>
    </div>
  )
}
