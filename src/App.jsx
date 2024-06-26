import { useState } from 'react'
import Input from './components/input';
import List from './components/list';
import './app.css'

function App() {
  const [items, setItems] = useState([1, 2, 3])
  const submit = (value) => {
    setItems([...items, value])
  }

  const deleteItem = (value)=>{
    let newArray = items.filter(item => item !== value)
    setItems(newArray)
  }

  return (
    <div className="body">
      <div className='container'>
        <Input submit={submit} />

        <List items={items} deleteItem={deleteItem}/>

      </div>
    </div>
  )
}

export default App;
