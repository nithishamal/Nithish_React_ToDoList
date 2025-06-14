import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ToDoList from "./ToDoList";
import "./style.css";

function ToDoItem() {
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    function handleAddToList() {
        if (inputText.trim() === "") {
            alert("Please enter a value!");
            return;
        }
        const newItem = {
            id: Date.now(),
            text: inputText,
            completed: false
        };
        setTodoItems([...todoItems, newItem]);
        setInputText("");
    }

    function handleDelete(id) {
        const updatedItems = todoItems.filter(item => item.id !== id);
        setTodoItems(updatedItems);
    }

    function handleUpdate(id, updatedText) {
        const updatedItems = todoItems.map(item =>
            item.id === id ? { ...item, text: updatedText } : item
        );
        setTodoItems(updatedItems);
    }

    function handleCompleteToggle(id, isCompleted) {
        const updatedItems = todoItems.map(item =>
            item.id === id ? { ...item, completed: isCompleted } : item
        );
        setTodoItems(updatedItems);
    }

    return (
        <>
            <div className="container">
                <div className="inputcol">
                    <input
                        name="text"
                        className="textarea"
                        aria-label="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter your to do list..."
                    />
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
            {todoItems.length > 0 && (
                <div className="list-box">
                    {todoItems.map((item) => (
                        <ToDoList
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                            onCompleteToggle={handleCompleteToggle}
                            completed={item.completed}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default ToDoItem;
