import { createServer, Model } from 'miragejs'

// level = 1: very low; 3: moderate; 5: very high

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      todos: Model
    },

    seeds(server) {
      server.create('todo', {
        id: 1,
        title: 'Investment Growth Fund',
        category: 'conventional',
        level: '3',
        nav: {
          date: new Date('2023-09-01'),
          price: '0.3358'
        },
        performance: {
          ytd: 4.89,
          one_year: 7.02,
          three_year: 17.31,
          five_year: 15.02,
          since: 250.33
        }
      })
      server.create('todo', {
        id: 2,
        title: 'Investment Growth Fund 2',
        category: 'conventional',
        level: '5',
        nav: {
          date: new Date('2023-08-31'),
          price: '0.2358'
        },
        performance: {
          ytd: 4.79,
          one_year: 7.62,
          three_year: 13.31,
          five_year: 15.02,
          since: 350.33
        }
      })
      server.create('todo', {
        id: 3,
        title: 'Investment Bond Fund',
        category: 'conventional',
        level: '2',
        nav: {
          date: new Date('2023-09-01'),
          price: '0.8358'
        },
        performance: {
          ytd: 4.89,
          one_year: 7.02,
          three_year: 17.31,
          five_year: 15.02,
          since: 250.33
        }
      })
      server.create('todo', {
        id: 4,
        title: 'Investment Al-Umran',
        category: 'islamic',
        level: '1',
        nav: {
          date: new Date('2023-09-01'),
          price: '0.1358'
        },
        performance: {
          ytd: 5.89,
          one_year: 7.12,
          three_year: 17.31,
          five_year: 15.02,
          since: 250.33
        }
      })
      server.create('todo', {
        id: 5,
        title: 'Investment Shariah Progress Fund',
        category: 'islamic',
        level: '5',
        nav: {
          date: new Date('2023-09-01'),
          price: '0.0058'
        },
        performance: {
          ytd: 1.89,
          one_year: 2.12,
          three_year: 3.31,
          five_year: 4.02,
          since: 120.33
        }
      })
    },

    routes() {
      this.namespace = 'api/todos'

      this.get(
        '/',
        (schema, request) => {
          return schema.todos.all().models
        },
        { timing: 5000 }
      )

      this.patch('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody)
        let id = request.params.id
        let todo = schema.todos.find(id)
        return todo.update(newAttrs)
      })

      this.delete('/:id', (schema, request) => {
        let id = request.params.id
        return schema.todos.find(id).destroy()
      })
    }
  })

  return server
}
