import React from 'react'
// commit
function LabelTextAreaInput(props) {

    const { label = 'label', inputValue, placeholder, name = "name", onChange, errorMsg = 'errorMsg', flag = false, containerStyle, maxLength} = props
    return (
        <div className="ltai_container" style={containerStyle}>
            {/* <label htmlFor="" className="ltai_label">{label}</label> */}
            <div className="ltai_input_container">
                <textarea className="ltai_input" placeholder={placeholder} name={name} value={inputValue} onChange={onChange} maxLength={maxLength} />
                    
                <p className="ltai_error_text" style={{ display: flag ? 'block' : 'none' }}>{errorMsg}</p>
                {maxLength?
                    <p className="ltai_label" style={{flex:1,alignSelf:'flex-end', textAlign:'right'}}>{inputValue.length} / {maxLength}</p>:
                    null
                }
            </div>
        </div>
    )
}

export default LabelTextAreaInput