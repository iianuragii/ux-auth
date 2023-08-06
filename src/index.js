import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/login.js';
import Logout from './components/logout.js';
import Profile from './components/profile.js';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="anurag-tenant.us.auth0.com"
    clientId={process.env.MEOW}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Login />
    <Profile/>
    <Logout />
    
  </Auth0Provider>,
);
