import App from './App'

import { createBrowserRouter } from 'react-router-dom'
import Lessons from './Lessons'
import SeparatwLesson from './components/SeparatwLesson'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/lesson',
		element: <Lessons />,
	},
	{
		path: '/lesson/:id',
		element: <SeparatwLesson />,
	},
])

export default router
