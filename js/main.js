const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function() {
      this.todos.push(this.newItem)
      this.newItem = ''
    },
    deleteItem(index) {
      if (confirm('削除してよろしいですか？')) {
        this.todos.splice(index, 1)
      }
    }
  }
})
