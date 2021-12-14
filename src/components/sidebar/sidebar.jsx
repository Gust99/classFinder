import React from 'react'
import { Home, Shop, Android} from '@material-ui/icons'
import "./sidebar.css"

export default function sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Menu</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <Home />  
                        Home  
                    </li>
                    <li className='sidebarListItem'>
                        <Shop />
                        Shop    
                    </li>
                    <li className='sidebarListItem'>
                        <Android />
                        Android    
                    </li>
                </ul>
                <h3 className='sidebarTitle'>Ventas</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>
                        <Home />  
                        Home  
                    </li>
                    <li className='sidebarListItem'>
                        <Shop />
                        Shop    
                    </li>
                    <li className='sidebarListItem'>
                        <Android />
                        Android    
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
