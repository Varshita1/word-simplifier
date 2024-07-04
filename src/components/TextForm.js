import React , {useState} from 'react'

export default function TextForm() {
    const [text,setText]= useState(' ');
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleDownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleClear = () =>{
        let newText = ' ';
        setText(newText)

    }
    const handleOnChange = (event) =>{
      setText(event.target.value)
    }
    
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
const spaces = () => {
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "))
  }

  return (
<div>
    <div className="container">
<div className="mb-2">

  <textarea className="form-control" value={text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
<button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
<button className="btn btn-secondary mx-2" onClick={spaces}>Remove Extra Spaces</button>
<button type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>

</div>
<div className="container">
    <h1>Your Text Summary </h1>
    <p> {text.split(" ").length} words and {text.length} characters </p>
    <p> {0.008 * 60 * text.split(" ").length} Seconds read </p>
    <h2> Preview </h2>
    <p>{text}</p>
</div>
</div>
  )
}
