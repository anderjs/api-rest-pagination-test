const router = require('express').Router()

const users = [
  { id: 0, name: 'Anderson', age: 22 },
  { id: 1, name: 'Jose', age: 24 },
  { id: 2, name: 'Luis', age: 22 },
  { id: 3, name: 'Pedro', age: 27 },
  { id: 4, name: 'Andres', age: 29 },
  { id: 5, name: 'Luis', age: 30 },
  { id: 6, name: 'Vladimir', age: 99 },
  { id: 7, name: 'Joker', age: 54 },
  { id: 8, name: 'Batman', age: 33 },
  { id: 9, name: 'Fizz', age: 49 },
  { id: 10, name: 'Hulk', age: 30 }
]

function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}


router.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  return res.status(200).json({
    response: paginate(users, limit, page)
  })
})


module.exports = router