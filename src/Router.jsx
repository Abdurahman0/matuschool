import App from './App'

import { createBrowserRouter } from 'react-router-dom'
import Lessons from './Lessons'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/lesson',
		element: <Lessons />,
	},
])

export default router
