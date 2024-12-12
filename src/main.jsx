import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { DataProvider } from './context/lesson-context'
import ScrollToTopWrapper from './components/ScrollToTop'
import App from './App'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}>
			<ScrollToTopWrapper>
				<DataProvider>
					<App />
				</DataProvider>
			</ScrollToTopWrapper>
		</RouterProvider>
	</StrictMode>
)
