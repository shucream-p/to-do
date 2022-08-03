const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  mounted: function() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    saveLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    addItem() {
      const item = {
        title: this.newItem,
        isDone: false,
        isActive: false
      }
      this.todos.push(item)
      this.newItem = ''
      this.saveLocalStorage()
    },
    deleteItem(index) {
      if (confirm('削除してよろしいですか？')) {
        this.todos.splice(index, 1)
        this.saveLocalStorage()
      }
    },
    editItem(index) {
      this.todos[index].isActive = true
    },
    editDone(index) {
      this.todos[index].isActive = false
      this.saveLocalStorage()
    }
  }
})
