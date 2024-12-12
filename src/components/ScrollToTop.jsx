import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopWrapper({ children }) {
	const location = useLocation()

	useEffect(() => {
		console.log('Pathname changed:', location.pathname)
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth', // Optional: Adds smooth scrolling
		})
	}, [location.pathname]) // Listen for route changes

	return <>{children}</>
}

export default ScrollToTopWrapper
