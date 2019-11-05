const router = require('express').Router()

const users = [
  { id: 0, name: 'Anderson', age: 22 },
  { id: 1, name: 'Jose', age: 24 },
  { id: 2, name: 'Luis', age: 22 },
  { id: 3, name: 'Pedro', age: 27 },
  { id: 4, name: 'Andres', age: 29 },
  { id: 5, name: 'Luis', age: 30 }
]


router.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  return res.status(200).json({
    response: users.slice(page - 1, limit)
  })
})


module.exports = router