import React, { useState } from 'react';

export default function TextForm(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setbtntext] = useState("Dark Mode");
    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Dark Mode");
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#39424e'
    //         })
    //         setbtntext("Light Mode");
    //     }
    // }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to upper case.', 'success');
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lower case.', 'success');
    }
    const clearText = () => {
        setText("");
        props.showAlert('Text cleared', 'success');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard.', 'success');
    }
    const handleExtraSpace = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText)
        props.showAlert('Extra spaces removed.', 'success');
    }
    const toggleCase = () => {
        let str = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] >= 'a' && text[i] <= 'z') {
                str += text[i].toUpperCase();
            }
            else if (text[i] >= 'A' && text[i] <= 'Z') {
                str += text[i].toLowerCase();
            }
            else {
                str += text[i];
            }
        }
        setText(str);
        // props.showAlert('Copied to clipboard.', 'success');
    }

    const [text, setText] = useState('');
    // text = "Enter text here"; // Wrong way to change the state;
    return <div>
        <div className="mb-3 my-3 position-relative" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            {/* <div className="container dark">
                <button type="button" onClick={toggleStyle} className="btn btn-dark">{btntext}</button>
            </div> */}
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="position-relative">
                    {/* <textarea className="form-control my-3" style={myStyle} id="myBox" rows="8" placeholder='Write your text here' value={text} onChange={handleOnChange}></textarea> */}
                    <textarea className="form-control my-3" id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Write your text here' value={text} onChange={handleOnChange}></textarea>
                    <img className='clear' onClick={clearText} src="clear.png" alt="" />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPER CASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>lower case</button>
                <button className="btn btn-primary mx-2" onClick={toggleCase}>ToGglE cAse</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2">
                <h4>Your text summary</h4>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </div>
    </div>;
}
