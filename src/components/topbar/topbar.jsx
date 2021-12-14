import React from 'react'
import "./topbar.css"
import {NotificationsNone, Settings, Language} from '@material-ui/icons'

export default function topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <span className='logo'>LOGO</span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNone/>
                </div>
                <div className='topbarIconContainer'>
                    <Settings/>
                </div>
                <div className='topbarIconContainer'>
                    <Language/>
                </div>
                <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='' className='avatar'/>
            </div>
        </div>
    </div>
  )
}
