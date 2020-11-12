import React from 'react'
import "./Widget.css"

function Widget() {
    return (
        <div className="widget">
            <iframe
                src=""
                width="340"
                height="100%"
                style={{border: "none", overflow:"hidden"}}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
            
        </div>
    )
}

export default Widget
