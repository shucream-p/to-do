const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem() {
      const item = {
        title: this.newItem,
        isDone: false,
        isActive: false
      }
      this.todos.push(item)
      this.newItem = ''
    },
    deleteItem(index) {
      if (confirm('削除してよろしいですか？')) {
        this.todos.splice(index, 1)
      }
    },
    editItem(index) {
      this.todos[index].isActive = true
    },
    editDone(index) {
      this.todos[index].isActive = false
    }
  }
})
