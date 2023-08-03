import React from "react"
import "./LogOut.css"

const LogOut = (props) => {
    return (
        <div className={`${props.logoutVisible ? "log_out_container" : "closed"}`} onClick={() => props.handleLogOutClick()}>
            <p className="log_out_text">
                Log Out
            </p>
        </div>
    )
}

export default LogOut;