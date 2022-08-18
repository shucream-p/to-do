const app = new Vue({
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
    addItem () {
      const item = {
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
      this.todos[index].isEditing = false
    },
    doneEdit (event, index) {
      if (event.keyCode !== 13) return
      this.todos[index].isEditing = false
      this.saveLocalStorage()
    }
  }
})
