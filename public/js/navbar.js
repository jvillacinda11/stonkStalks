import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;

// user logout, via passport function

// app.get('/logout', function (req, res) {
//   req.logout();
//   res.redirect('/');
// });

$('#logout').on('click', () => {
  axios.get(`/api/users/logout`)
    .then(() => {
      location.replace('./login')
    })
    .catch(e => console.error(e))
})

