import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function ToDoList (props){

    return (
        <>
            <div className="list-item">
                <input
                    name="checkbox"  
                    aria-label="checkbox"
                    value="checked"
                    type="checkbox"
                />
                <div className="inputcol">
                    <input 
                    name="text" 
                    className="textarea" 
                    aria-label="text"
                    onChange={(e) => 
                        setInputText(e.target.value)
                    }
                    ></input>
                </div>
                <button
                    aria-label="edit" 
                    type="button" 
                    className="edit-btn"
                    // onClick={handleAddToList}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </button>               
                <button
                    aria-label="delete" 
                    type="button" 
                    className="delete-btn"
                    // onClick={handleAddToList}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>

            </div>
        </>
    )
}

export default ToDoList;