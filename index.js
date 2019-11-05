const express = require('express')
const users = require('./example/pagination')

class App {
  /**
   * @public port
   * @param {{ port?: number }} options 
   */
  constructor(options) {
    this.port = options.port
    this.app = express()
  }

  /**
   * @returns {void}
   */
  bootstrapModule (callback) {
    this.app.use('/', users)

    this.app.listen(this.port, callback)
  }
}

const app = new App({ port: 4000 })

app.bootstrapModule(() => {
  console.log('Express running on port 3000')
})