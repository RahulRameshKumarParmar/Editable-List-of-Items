import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [items, setItems] = useState(["Tomato", "Carrat", "Cabbage", "Potato", "Onion"]);
  let [editIndex, setEditIndex] = useState(null);
  let [updateValue, setUpdateValue] = useState(null);

  let update = () => {

  }
  return (
    <div className="App">
      <div className='mt-5'>
        <h1>Editable List of Items</h1>
        <p>Create a list where each item can be clicked to enter an editing mode. The item should display an input field where the user can edit it and save the changes. Use state to update the list dynamically.</p>
      </div>
      <div>
        {items.map((value, index) => {
          return (
            <div key={index}>
              <input className='me-3' type='checkbox' />
              {(editIndex === index) ?
                (
                  <>
                    <input type='text' value={updateValue} onChange={(event) => setUpdateValue(event.target.value)} />
                    <button onClick={() => {
                      let updatedItems = [...items]
                      updatedItems[editIndex] = updateValue
                      setItems(updatedItems)
                      setEditIndex(null)
                    }}>Save</button>
                  </>
                )
                :
                (<label onClick={() => {
                  setEditIndex(index);
                  setUpdateValue(items[index])
                }}>{value}</label>)
              }
            </div>
          )
        })}
      </div>
    </div >
  );
}
export default App;