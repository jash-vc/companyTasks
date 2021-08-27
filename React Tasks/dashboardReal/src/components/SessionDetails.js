import React from 'react'

function SessionDetail( {info, actionIcon} ) {
    return (
        <React.Fragment>
            <div className="sessionDetail d-flex align-items-center px-4 py-3 me-3">
                <i className="actionIconWrap me-2">{actionIcon}</i>
                <p className="sessionActionWrap m-0">{info}</p>
            </div>
        </React.Fragment>
    )
}

export default SessionDetail;
