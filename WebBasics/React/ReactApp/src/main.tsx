import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />
  },
  {
    path: "/p2",
    element: <Page2 />
  }
])

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
