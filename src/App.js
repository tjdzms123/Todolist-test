import './App.css';
import { useState } from 'react';


function App() {

  const [todolists, setToDoLists] = useState([
    { id: 1, title: 'useState 깨우치기' },
    { id: 2, title: 'props 깨우치기' },
  ])

  const [todotitles, setToDoTitles] = useState('');

  const ChangeHandler = (e) => {
    setToDoTitles(e.target.value)
  }

  const todoListAddBtn = () => {
    const newToDoList = {
      id: todolists.length + 1,
      title: todotitles,
    }

    setToDoLists([...todolists, newToDoList]);
  }


  return (
    <div className='layout'>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className="add-form">
        <div className="input-group">
          <label>React를 배워봅시다</label>
          <input type='text' value={todotitles} onChange={ChangeHandler} />
          <button onClick={todoListAddBtn}>추가하기</button>
        </div>
      </div>
      <div className="list-container">
        <h2>목록🎈</h2>
        <div className="list-wrapper">
          {todolists.map((todolist) => {
            return (
              <div key={todolist.id} className='todolistcard'>
                {todolist.title}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
