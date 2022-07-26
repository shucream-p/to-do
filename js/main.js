/* eslint-disable no-new */
/* global Vue */

new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  mounted () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  methods: {
    saveLocalStorage () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    toggleDone () {
      this.saveLocalStorage()
    },
    addItem () {
      const item = {
        id: new Date().getTime().toString(),
        title: this.newItem,
        isDone: false,
        isEditing: false
      }
      this.todos.push(item)
      this.newItem = ''
      this.saveLocalStorage()
    },
    deleteItem (index) {
      if (confirm('削除してよろしいですか？')) {
        this.todos.splice(index, 1)
        this.saveLocalStorage()
      }
    },
    editItem (index) {
      this.todos[index].isEditing = true
    },
    cancelEdit (index) {
      const todos = JSON.parse(localStorage.getItem('todos'))
      this.todos[index].title = todos[index].title
      this.todos[index].isEditing = false
    },
    doneEdit (index) {
      this.todos[index].isEditing = false
      this.saveLocalStorage()
    }
  }
})
