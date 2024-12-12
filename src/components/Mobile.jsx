import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function MobileModal() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	useEffect(() => {
		// Prevent scrolling when the modal is open
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = '' // Cleanup when component is unmounted
		}
	}, [isMobileMenuOpen])

	// Handle navigation and closing modal
	const handleLinkClick = (href, e) => {
		e.preventDefault()
		setIsMobileMenuOpen(false)

		// Navigate after a slight delay to allow the modal to close
		setTimeout(() => {
			window.location.href = href
		}, 200)
	}

	return (
		<div
			className={`relative ${
				isMobileMenuOpen ? 'bg-[#e88fb1]' : 'bg-transparent'
			} min-h-screen w-full transition-colors duration-300`}
		>
			{/* Menu Toggle Button */}
			<button
				onClick={toggleMobileMenu}
				className='xl:hidden z-50 text-2xl p-2 fixed top-4 right-4 focus:outline-none'
				aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{isMobileMenuOpen ? (
					<FaTimes color='black' />
				) : (
					<FaBars color='black' />
				)}
			</button>

			{/* Overlay */}
			{isMobileMenuOpen && (
				<div
					className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40'
					onClick={toggleMobileMenu}
				></div>
			)}

			{/* Mobile Menu */}
			<nav
				className={`fixed top-0 right-0 w-3/4 h-full bg-[#e88fb1] text-white transform ${
					isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				} transition-transform duration-300 z-50`}
				aria-hidden={!isMobileMenuOpen}
			>
				<ul className='flex flex-col gap-5 p-6'>
					<li className='hover:scale-100 hover:font-bold font-medium transition-all duration-300'>
						<NavLink to='#sale' onClick={e => handleLinkClick('#sale', e)}>
							Акции
						</NavLink>
					</li>
					<li className='hover:scale-100 hover:font-bold font-medium transition-all duration-300'>
						<NavLink
							to='#coments'
							onClick={e => handleLinkClick('#coments', e)}
						>
							Отзывы
						</NavLink>
					</li>
					<li className='hover:scale-100 hover:font-bold font-medium transition-all duration-300'>
						<NavLink to='/help' onClick={e => handleLinkClick('/help', e)}>
							Техподдержка
						</NavLink>
					</li>
					<li className='rounded-md px-4 py-2 bg-inherit text-white transform transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-lg'>
						<NavLink to='/room' onClick={e => handleLinkClick('/room', e)}>
							Личный кабинет
						</NavLink>
					</li>
				</ul>
			</nav>
			<button
				onClick={toggleMobileMenu}
				className='xl:hidden z-50 text-2xl p-2 fixed top-4 right-4 focus:outline-none'
				aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
			>
				{isMobileMenuOpen ? (
					<FaTimes color='black' />
				) : (
					<FaBars color='black' />
				)}
			</button>
		</div>
	)
}

export default MobileModal
