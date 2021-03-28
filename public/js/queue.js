axios.get('/api/users/auth', {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
  .then(({ data: { visitors }}) => {
    visitors.forEach(visitor => {
      addVisitor(visitor)
    })
  })
  .catch(err => {
    console.log(err)
    window.location = '/login'
  })

document.getElementById('addVisitorBtn').addEventListener('click', event => {
  event.preventDefault()

  const name = document.getElementById("addVisitor").value
  document.getElementById("addVisitor").value = ''

  axios.post('/api/visitors', {
    name: name
  }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(({ data: visitor }) => {
      addVisitor(visitor)
    })
    .catch(err => console.log(err))
})

const addVisitor = visitor => {
  const visitorElem = document.createElement("li")
  visitorElem.classList = "list-group-item"

  const visitorRow = document.createElement("div")
  visitorRow.classList = "row"

  const visitorCol = document.createElement("div")
  visitorCol.classList = "col-sm-6 left"
  visitorCol.textContent = visitor.name
  
  const btnCol = document.createElement("div")
  btnCol.classList = "col-sm-6 right"

  const removeVisitorBtn = document.createElement("button")
  removeVisitorBtn.type = "submit"
  removeVisitorBtn.classList = "btn btn-success"
  removeVisitorBtn.textContent = "Remove"
  removeVisitorBtn.dataset.id = visitor.id

  removeVisitorBtn.addEventListener('click', event => {
    axios.delete(`/api/visitors/${event.target.dataset.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

    event.target.parentNode.parentNode.parentNode.remove()
  })

  btnCol.append(removeVisitorBtn)
  
  visitorRow.append(visitorCol)
  visitorRow.append(btnCol)
  
  visitorElem.append(visitorRow)

  document.getElementById("queue").append(visitorElem)
}