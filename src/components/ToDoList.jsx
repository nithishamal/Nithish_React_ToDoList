import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function ToDoList({ id, text, completed, onDelete, onUpdate, onCompleteToggle }) {
    const [inputText, setInputText] = useState(text);
    const [isEditable, setIsEditable] = useState(false);

    function handleEdit() {
        setIsEditable(true);
    }

    function handleDone() {
        const confirmed = window.confirm("Are you sure you want to save the changes?");
        if (!confirmed) return;
        setIsEditable(false);
        onUpdate(id, inputText);
    }

    function handleDelete() {
        const confirmDelete = window.confirm("Are you sure you want to delete list?");
        if (confirmDelete) onDelete(id);
    }

    function handleCheckboxChange(e) {
        if (completed){
            const confirmComplete = window.confirm("Are you sure you want to remove completed?");
            if (confirmComplete) onCompleteToggle(id, e.target.checked);
        }else{
            const confirmComplete = window.confirm("Are you sure you want to mark as completed?");
            if (confirmComplete) onCompleteToggle(id, e.target.checked);
        }
        
        
    }

    if (!text.trim()) return null;

    return (
        <div className="list-item">
            <input
                name="checkbox"
                aria-label="checkbox"
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
            />
            <div className="inputcol">
                <input
                    name="text"
                    className="textarea"
                    aria-label="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    readOnly={!isEditable || completed}
                />
            </div>

            {completed ? (
                <span className="completed-status">Completed</span>
            ) : !isEditable ? (
                <>
                    <button className="edit-btn" onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="delete-btn" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </>
            ) : (
                <button className="done-btn" onClick={handleDone}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            )}
        </div>
    );
}

export default ToDoList;
