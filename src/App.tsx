import './App.css';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ChatPage } from './pages/chat';
import { SignInPage } from './pages/signin';
import { SignUpPage } from './pages/signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },
  {
    path: "/signin",
    element: <SignInPage />
  },
  {
    path: "/chat",
    element: <ChatPage />
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
