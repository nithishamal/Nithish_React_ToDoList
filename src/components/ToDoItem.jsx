import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



function ToDoItem(){

    const [inputText, setInputText] = useState("");
    console.log(inputText);
    function handleAddToList(){
        if (inputText.trim() === "") {
        alert("Please enter a value!");
        return;
    }
        setInputText(inputText);
    }
    return (
        <>
            <div className="container">
                <div className="inputcol">
                    <input 
                    name="text" 
                    className="textarea" 
                    aria-label="text"
                    onChange={(e) => 
                        setInputText(e.target.value)
                    }
                    ></input>
                    <button 
                    aria-label="add" 
                    type="button" 
                    className="buttoninput"
                    onClick={handleAddToList}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className="list-box">

            </div>
        </>
    )
}

export default ToDoItem;