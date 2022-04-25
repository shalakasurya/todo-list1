import React, { useState } from 'react';
import './App.css';

function App() {

  //state hook - useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if(!newItem){
      alert("Enter an item.");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    let confirmAction = window.confirm("Are you sure to delete this item?");
    if (confirmAction) {
      const newItem = items.filter(item => item.id !== id);
      setItems(newItem);
    } else {
      alert("Item canceled");
    }
  }

  return (
    <div className="App">
        <div className='todoList'>
          <h1>My Todo List</h1>
            <input placeholder='Add item here...' 
                  type='text'
                  value={newItem}
                  onChange= {e => setNewItem(e.target.value)}
            />
            <button onClick={() => addItem()}>ADD</button>
            <ul>
                {items.map(item => {
                  return(
                    <li key={items.id}>{item.value} <button className="delete-button" onClick={() => deleteItem(item.id)}>Delete</button></li>
                  )
                })}
            </ul>
        </div>    
    </div>
  );
}

export default App;
