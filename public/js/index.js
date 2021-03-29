// const status1 = () => {

//   if (localStorage.getItem('token')) {
//     // main nav
//     let signOut = document.createElement('li')
//     signOut.classList = 'hide-on-small-only signOut'
//     signOut.innerHTML = `<a class="signOut" >Log Out</a>`

//     let myProf = document.createElement('li')
//     myProf.innerHTML = `<a class="hide-on-small-only" href="/myProfile">My Profile</a>`

//     document.getElementById('navList').append(myProf)
//     document.getElementById('navList').append(signOut)

//     // side out nav
//     let signout = document.createElement('li')
//     signout.classList = 'hide-on-med-and-up signOut'
//     signout.innerHTML = `<a class="signOut" >Log Out</a>`

//     let myprof = document.createElement('li')
//     myprof.innerHTML = `<a class="hide-on-med-and-up" href="/myProfile">My Profile</a>`

//     document.getElementById('slide-out').append(myprof)
//     document.getElementById('slide-out').append(signout)


//   } else {
//     let signIn = document.createElement('li')
//     signIn.id = 'signOut'
//     signIn.innerHTML = `<a href="./login.html">Log In</a>`

//     document.getElementById('navList').append(signIn)
//   }
// }
// status1()
