import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./DarkMode.css"

export default function DarkMode({...props}) {

    return (
        <div className="toggle-theme" onClick={props.changeTheme}>
            <FontAwesomeIcon icon={props.icon} disable="true"/>
        </div>
    )
}
