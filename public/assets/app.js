
const axios = window.axios

const getturnips = () => {        
  axios.get('/api/turnips')      
    .then(({ data: turnips }) => {
      document.getElementById('turnips').innerHTML = ''      
      turnips.forEach(turnip => {                     
        const turnipElem = document.createElement('li')
        turnipElem.className = 'list-group-item d-flex justify-content-between align-items-center'
        turnipElem.innerHTML =
         `<p>DodoCode: ${turnip.DodoCode}</p>
          <p>TurnipPrice: ${turnip.TurnipPrice}</p>
          <p>eventTime: ${turnip.eventTime}</p>
          <p>Discord: ${turnip.Discord}</p>
          <p>VisitorLimit: ${turnip.VisitorLimit}</p>
          <p>QueueLimit: ${turnip.QueueLimit}</p>
          `
          
          
        document.getElementById('turnips').append(turnipElem)   
      })
    })
    .catch(err => console.error(err))
}

document.getElementById('Save4').addEventListener('click', () => {
  axios.post('/api/turnips', {             
    DodoCode: document.getElementById('DodoCode').value,
    TurnipPrice: document.getElementById('TurnipPrice').value,
    eventTime: document.getElementById('eventTime').value,
    Discord: document.getElementById('Discord').value,
    VisitorLimit: document.getElementById('VisitorLimit').value,
    QueueLimit: document.getElementById('QueueLimit').value
  },{
    headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
  } )
    .then(({ data: turnip }) => {
      const turnipElem = document.createElement('li')
      turnipElem.className = 'list-group-item d-flex justify-content-between align-items-center'
      turnipElem.innerHTML =
        `<p>DodoCode: ${turnip.DodoCode}</p>
          <p>TurnipPrice: ${turnip.TurnipPrice}</p>
          <p>eventTime: ${turnip.eventTime}</p>
          <p>Discord: ${turnip.Discord}</p>
          <p>VisitorLimit: ${turnip.VisitorLimit}</p>
          <p>QueueLimit: ${turnip.QueueLimit}</p>
          `
          
          
      document.getElementById('turnips').append(turnipElem)   
      document.getElementById('DodoCode').value = ''
      document.getElementById('TurnipPrice').value = ''
      document.getElementById('eventTime').value = ''
      document.getElementById('Discord').value = ''
      document.getElementById('VisitorLimit').value = ''
      document.getElementById('QueueLimit').value = ''
    })
    .catch(err => console.error(err))


})


//------------------------------------------------

// document.getElementById('Save4').addEventListener('click', event => {
 
//   let turnip = {
   
      
//     DodoCode: document.getElementById('DodoCode').value,
//     TurnipPrice: document.getElementById('TurnipPrice').value,
//      eventTime: document.getElementById('eventTime').value,
//      Discord: document.getElementById('Discord').value,
//      VisitorLimit: document.getElementById('VisitorLimit').value,
//      QueueLimit: document.getElementById('QueueLimit').value
//   }
//   axios.post('/api/turnips', turnip, {
//     headers: {
//       'Authorization': `Bearer ${localStorage.getItem('token')}`
//     }
//   })
//     .then(({ data: turnip }) => {
//       console.log(turnip)
//       const turnipElem = document.createElement('li')
//       turnipElem.innerHTML = `
//           <p>DodoCode: ${turnip.DodoCode}</p>
//           <p>TurnipPrice: ${turnip.TurnipPrice}</p>
//           <p>eventTime: ${turnip.eventTime}</p>
//           <p>Discord: ${turnip.Discord}</p>
//           <p>VisitorLimit: ${turnip.VisitorLimit}</p>
//           <p>QueueLimit: ${turnip.QueueLimit}</p>
//           `
//       document.getElementById('turnips').append(turnipElem)
//     })
// })

// axios.get('/api/users/auth', {
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`
//   }
// })
//   .then(({ data: turnips }) => {
//     console.log(turnips)
//     turnips.forEach(turnip => {
//       const turnipElem = document.createElement('li')
//       turnipElem.innerHTML = `
//           <p>DodoCode: ${turnip.DodoCode}</p>
//           <p>TurnipPrice: ${turnip.TurnipPrice}</p>
//           <p>eventTime: ${turnip.eventTime}</p>
//           <p>Discord: ${turnip.Discord}</p>
//           <p>VisitorLimit: ${turnip.VisitorLimit}</p>
//           <p>QueueLimit: ${turnip.QueueLimit}</p>
//           `
//       document.getElementById('turnips').append(turnipElem)
//     })
//   })
//   .catch(err => window.location = '/login.html')