import React from 'react'
import '../styles/Child.css';



const Selection = (props) =>{
    let [color, setColor] = React.useState({color: ""})
    const updateSelectionStyle = (color) => {
        setColor({color: color.background})
    }
    return (
        <div style={{
            background: color.color
        }} onClick={() => props.applyColor(updateSelectionStyle)} className="fix-box">
            <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection;