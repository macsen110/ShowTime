Vue.config.debug = true;

/********
 * 
 * Vue Component
 * ******/

Vue.component('child', {
  // this does work, because we are in the right scope
  template: '<div v-show="someChildProperty">{{msg3}}</div>',
  props:['msg3'],
  data: function () {
    return {
      msg: 'hello, child',
      someChildProperty: true
    }
  }
})

Vue.component('child-bind', {
  // this does work, because we are in the right scope
  template: '<div v-show="someChildProperty">{{msg1}}</div>',
  props:['msg1'],
  data: function () {
    return {
      parentMsg: 'bbbb',
      someChildProperty: true
    }
  }
})
new Vue({
  el: '#testComponent'
})




// register child, which dispatches an event with
// the current message
Vue.component('child-component', {
  template: '#child-template',
  data: function () {
    return { msg2: '' }
  },
  methods: {
    notify: function () {
      if (this.msg2.trim()) {
        this.$dispatch('child-msg', this.msg2)
        this.msg2 = ''
      }
    }
  }
})

// bootstrap parent, which pushes message into an array
// when receiving the event
new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  // the `events` option simply calls `$on` for you
  // when the instance is created
  events: {
    'child-msg': function (msg) {
      // `this` in event callbacks are automatically bound
      // to the instance that registered it
      this.messages.push(msg)
    }
  }
})

/**********
 * test Vue 
 * 
 * *****/
new Vue({
  el: '#example-2',
  data: {
    msg: 'template-2',
    greeting: true
  },
  events: {
    'child-msg': function () {
    }
  },
  created: function () {
    this.$dispatch('child-msg')
  }
})

var mockData = {
	title: '<div>Learln JavaScript</div>',
	todos: [
		{
			done: true,
			content: '<div>Learln JavaScript</div>'
		},
		{
			done: false,
			content: 'Learn Vue.js'
		}
	],
	setTitle: function (value) {
		this.title = value
	}
}
setTimeout(function () {
	mockData.setTitle('oops')
}, 4000)


new Vue({
	el: '#demo',
	data: mockData
})



/*****
*
*Vue ToDo
*
*****/

new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos' }
    ]
  },
  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})


/*******
*Vue.extend()
*
****/
// create reusable constructor
var Profile = Vue.extend({
  props: ['firstName', 'lastName', 'alias'],
  template: '<div><p>{{firstName}} {{lastName}} aka {{alias}}</p></div>',
  
})

Vue.component('Profiles', Profile)
new Vue({
  el: '#reuseable_vue',
  data: {
    firstName: 'Walter',
    lastName: 'White',
    alias: 'Heisenberg'
  }
})

// // create an instance of Profile
// var profile = new Profile({
//   data: {
//     firstName: 'Walter',
//     lastName: 'White',
//     alias: 'Heisenberg'
//   }  
// })
// // mount it on an element
//profile.$mount('#mount-point');


/***
***
Vue directive
*****
****/


// register
Vue.directive('my-directive', {
  bind: function () {
	  console.log('bind')
  },
  update: function (value) {
	  console.log(value)
  },
  unbind: function () {
	  
  }
})
var mockDirective = {
	text: 'testDirective',
	setTitle: function (value) {
		this.text = value
	}
}
new Vue({
	el: '#testDirective',
	data: mockDirective
})
setTimeout(function () {
	mockDirective.setTitle('oops')
}, 2000)

/******
***
*Vue filter
****/

Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})

new Vue({
	el: '#testFilter',
	data: {
		message: 'hello,world'
	}
})

/*******

Simple handle event
*********/

new Vue({
	el: '#testBindImage',
	data: {
		src: 'tmp/t1.jpg'
	},
	methods: {
		change: function (value) {
			this.src = value
		}
	}	
})


/************
 * 
 * dynamic component
 */

new Vue({
  el: '#dynamic',
  data: {
    currentView: 'posts',
    firstName: 'firstName222'
  },
  aa: 'aaa',
  //template: '<div>A custom component!</div>',
  created: function () {
    setTimeout(function () {
      this.currentView = 'home';
      console.log(this.$options.aa)
    }.bind(this), 4000)
  },
  components: {
    home: Profile,
    posts: { 
      template: 'this is posts view 111'
    },
    archive: { /* ... */ }
  }
})


new Vue({
  el: '#dynamic2',
  data: {
    view: 'posts'
  },
  created: function () {
    setTimeout(function () {
      this.view = 'home';
    }.bind(this), 4000)
  },
  components: {
    home: {
      template: '<p>this is home views 222</p>'
    },
    posts: { 
      template: 'this is posts view 222'
    },
    archive: { /* ... */ }
  }
})


/******
 * 
 * slot
 * *****/
Vue.component('slotParent', {
  template: '#slot_parent_component'
})
Vue.component('slotChild', {
  template: '#slot_child_component'
})
new Vue({
  el: '#slot',
  template: '<slot-parent><slot-child></slot-child></slot-parent>'
})

Vue.component('slotNameParent', {
  temlate: '<div><slot name="one"></slot><slot></slot><slot name="two"></slot></div>'
})

new Vue({
  el: '#slot_name',
  template: '<slot-name-parent><p name="two">two</p><p name="one">one</p><p>Default A</p></slot-name-parent>'
})


/********
nextTick 
*****/

var vm = new Vue({
  el: '#nextTick',
  data: {
    msg: '123'
  }
})
vm.msg = 'new message' // change data
vm.$el.textContent === 'new message' // false
Vue.nextTick(function () {
  vm.$el.textContent === 'new message 11111' // true
})


/**
**
** replaced
*****/

new Vue({
  el: '#replace',
  replace: false,
  template: '<p>replaced</p>'
})

/****
***
** Event System
***/

Vue.component('eventSystemChild1', {
  template: '#eventSystemChild1',
  events: {
    'hook:created': function () {
      console.log('created!')
    },
    greeting: function (msg) {
      console.log(msg)
    },
    // can also use a string for methods
    bye: 'childTest1'
  },
  methods: {
    childTest1: function () {
      console.log('childTest1')
    }
  },
  created: function () {
    var self = this;
    setTimeout(function () {
      console.log(self)
      self.$dispatch('bye')
    }, 2000)
  }
})

new Vue({
  el: '#event_system_root',
  events: {
    bye: function () {
      console.log('this is parent response to the event bye')
    }
  },
  methods: {
    childTest1: function () {
      console.log('childToParentTest1')
    }
  },
  created: function () {
    this.childTest1()
  }
})


/**
** 
**
***********/
// extend and register in one step
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})

// also works for local registration
var Parent = Vue.extend({
  components: {
    'my-component': {
      template: '<div>A custom component!</div>'
    }
  }
})

/***
**Parent-Child-Communication
**
***********/

