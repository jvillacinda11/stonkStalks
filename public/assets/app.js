
const axios = window.axios

const getturnips = () => {        //getturnips
  axios.get('/api/turnips')       //turnips
    .then(({ data: turnips }) => {
      document.getElementById('turnips').innerHTML = ''      //div in html
      turnips.forEach(turnip => {                     //turnips
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
          
          
        document.getElementById('turnips').append(turnipElem)   //turnips
      })
    })
    .catch(err => console.error(err))
}

document.getElementById('Save4').addEventListener('click', () => {
  axios.post('/api/turnips', {            //turnips  
    DodoCode: document.getElementById('DodoCode').value,
    TurnipPrice: document.getElementById('TurnipPrice').value,
    eventTime: document.getElementById('eventTime').value,
    Discord: document.getElementById('Discord').value,
    VisitorLimit: document.getElementById('VisitorLimit').value,
    QueueLimit: document.getElementById('QueueLimit').value
  })
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
          
          
      document.getElementById('turnips').append(turnipElem)    //turnips
      document.getElementById('DodoCode').value = ''
      document.getElementById('TurnipPrice').value = ''
      document.getElementById('eventTime').value = ''
      document.getElementById('Discord').value = ''
      document.getElementById('VisitorLimit').value = ''
      document.getElementById('QueueLimit').value = ''
    })
    .catch(err => console.error(err))

  // const fs = require('fs')
  // let addstep1 = {
  //   Dodocode: document.getElementById('DodoCode').value

  // }

  // fs.writeFile('engineer.json', JSON.stringify(addstep1), err => {
  //   if (err) { console.log(err) }
  // })

})