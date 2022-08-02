const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function() {
      const item = {
        title: this.newItem,
        isDone: false
      }
      this.todos.push(item)
      this.newItem = ''
    },
    deleteItem(index) {
      if (confirm('削除してよろしいですか？')) {
        this.todos.splice(index, 1)
      }
    }
  }
})
