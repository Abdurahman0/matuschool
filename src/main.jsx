import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { DataProvider } from './context/lesson-context'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}>
			<DataProvider>
				<App />
			</DataProvider>
		</RouterProvider>
	</StrictMode>
)
