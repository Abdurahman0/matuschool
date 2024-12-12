import App from './App'

import { createBrowserRouter } from 'react-router-dom'
import Lessons from './Lessons'
import SeparatwLesson from './components/SeparatwLesson'
import Room from './Room'
import Help from './Help'

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
		path: '/room',
		element: <Room />,
	},
	{
		path: '/help',
		element: <Help />,
	},
	{
		path: '/lesson/:id',
		element: <SeparatwLesson />,
	},
])

export default router
