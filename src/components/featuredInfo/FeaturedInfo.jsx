import React from 'react'
import "./featuredinfo.css"
import { ArrowDownward } from '@mui/icons-material'
import AWSbutton from './AWSbutton'

export default function featuredInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle"> Nets vs 76ers</span>
            <div className="featuredMatchupContainer">
                <AWSbutton/>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"> Nets vs 76ers</span>
            <div className="featuredMatchupContainer">
                <AWSbutton/>
            </div>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"> Nets vs 76ers</span>
            <div className="featuredMatchupContainer">
                <AWSbutton/>
            </div>
        </div>

    </div>
  )
}
