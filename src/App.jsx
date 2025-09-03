import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editingText, setEditingText] = useState('')
  const inputRef = useRef(null)

  // Load tasks from localStorage on first render
  useEffect(() => {
    try {
      const stored = localStorage.getItem('todo_tasks')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) setTasks(parsed)
      }
    } catch (err) {
      // Fallback: ignore storage parse errors
      console.warn('Nie udało się wczytać zadań z localStorage:', err)
    }
  }, [])

  // Persist tasks to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('todo_tasks', JSON.stringify(tasks))
    } catch (err) {
      // Ignore write errors (np. tryb prywatny)
      console.warn('Nie udało się zapisać zadań do localStorage:', err)
    }
  }, [tasks])

  const addTask = () => {
    const text = newTaskText.trim()
    if (!text) return
    const task = { id: crypto.randomUUID(), text, completed: false }
    setTasks([task, ...tasks])
    setNewTaskText('')
    inputRef.current?.focus()
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const startEditing = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return
    setEditingTaskId(id)
    setEditingText(task.text)
  }

  const commitEdit = () => {
    const text = editingText.trim()
    if (!editingTaskId) return cancelEdit()
    if (!text) {
      // If cleared, delete the task
      setTasks(tasks.filter(t => t.id !== editingTaskId))
    } else {
      setTasks(tasks.map(t => t.id === editingTaskId ? { ...t, text } : t))
    }
    setEditingTaskId(null)
    setEditingText('')
  }

  const cancelEdit = () => {
    setEditingTaskId(null)
    setEditingText('')
  }

  const removeCompleted = () => {
    setTasks(tasks.filter(t => !t.completed))
  }

  const handleNewTaskKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter') commitEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  return (
    <div className="app">
      <h1 className="title">Moje zadania</h1>

      <div className="inputRow">
        <input
          ref={inputRef}
          className="textInput"
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={handleNewTaskKeyDown}
          placeholder="Nowe zadanie..."
          aria-label="Nowe zadanie"
        />
        <button className="btn btnPrimary" onClick={addTask}>Dodaj</button>
      </div>

      <div className="centerRow">
        <button className="btn btnGhost" onClick={removeCompleted}>Usuń ukończone</button>
      </div>

      <ul className="list">
        {tasks.length === 0 && (
          <li className="empty">Brak zadań</li>
        )}
        {tasks.map(task => (
          <li key={task.id} className={`item ${task.completed ? 'completed' : ''}`}>
            <label className="left" title={task.completed ? 'Oznaczone jako ukończone' : 'Nieukończone'}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
            </label>

            <div className="content">
              {editingTaskId === task.id ? (
                <input
                  className="editInput"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={commitEdit}
                  onKeyDown={handleEditKeyDown}
                  autoFocus
                />
              ) : (
                <button className="textButton" onClick={() => startEditing(task.id)}>
                  {task.text}
                </button>
              )}
            </div>

            <div className="right">
              <button className="btn btnDanger" onClick={() => deleteTask(task.id)}>Usuń</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
