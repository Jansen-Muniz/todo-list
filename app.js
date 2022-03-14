const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  const existingValue = inputValue.length
  const newTodo = `
  <li class="list-group-item d-flex justify-content-between align-items-center" data-todo = "${inputValue}">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt" data-trash = "${inputValue}"></i>
  </li>`

  if (existingValue) {
    todosContainer.innerHTML += newTodo

    event.target.reset()
  }
}

const removeTodo = event => {
  const clickedElementIsTrash = event.target.dataset.trash
  const todoItem = document.querySelector(`[data-todo = "${clickedElementIsTrash}"]`)

  if (clickedElementIsTrash) {
    todoItem.remove()
  }
}

const searchTodo = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  todos
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })

  todos
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
inputSearchTodo.addEventListener('input', searchTodo)