import React from 'react'
// import './LabelInput.css'
// commit 
function LabelInput(props) {

    const { 
        // label = 'label',
         id="" ,type = "text", inputValue, placeholder, name = "name", onChange, errorMsg = 'errorMsg', flag = false, containerStyle, readOnly = false, maxLength, disabled, inputStyle, star } = props
    return (
        <div className="li_container" style={containerStyle}>
            {/* <label htmlFor="" className="li_label">{label}<span style={{color: "red"}}>{star}</span></label> */}
            <div className="li_input_container">
                <input className="li_input" id={id} style={inputStyle} type={type} placeholder={placeholder} name={name} value={inputValue} onChange={onChange} readOnly={readOnly} maxLength={maxLength} disabled={disabled} />

                <p className="li_error_text" style={{ display: flag ? 'block' : 'none' }}>{errorMsg}</p>
            </div>
        </div>
    )
}

export default LabelInput
