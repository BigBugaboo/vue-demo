Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>这是一个Tip,{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'webview loaded ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  methods: {
    changeSeen: function () {
      this.seen = !this.seen
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [{
      id: 1,
      text: 'plan something'
    }, {
      text: 'do something'
    }, {
      text: 'think something'
    }]
  },
})

var app5 = new Vue ({
  el: '#app-5',
  data: {
    inputValue: ''
  },
  methods: {
    handleInput: function (e) {
      console.log('value of handleInput', e.target.value)
      this.inputValue = e.target.value
    }
  }
})

