const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Reviews: The Name of the Wind"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.get('/photos', async (req, res)=>{
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos')

  res.json(data)

})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})