import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/Store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import Protected from './components/AuthLayout.jsx'
import LogInPage from './Pages/LogInPage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import AllPostsPage from './Pages/AllPostsPage.jsx'
import AddPostPage from './Pages/AddPostPage.jsx'
import EditPostPage from './Pages/EditPostPage.jsx'
import PostPage from './Pages/PostPage.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children : [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/login',
          element: (
            <Protected authentication = {false}>
              <LogInPage />
            </Protected>
          )
        },
        {
          path: '/signup',
          element: (
            <Protected authentication = {false}>
              <SignUpPage />
            </Protected>
          )
        },
        {
          path: '/all-posts',
          element: (
            <Protected authentication>
              <AllPostsPage />
            </Protected>
          )
        },
        {
          path: '/add-post',
          element: (
            <Protected authentication>
              <AddPostPage />
            </Protected>
          )
        },
        {
          path: '/edit-post/:slug',
          element: (
            <Protected authentication>
              <EditPostPage />
            </Protected>
          )
        },
        {
          path: '/post/:slug',
          element: <PostPage />
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
