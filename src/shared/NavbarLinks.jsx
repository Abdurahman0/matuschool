import { NavLink } from 'react-router-dom'

function NavbarLinks({ name, href }) {
	return (
		<div>
			<NavLink
				to={href}
				smooth={true}
				duration={500}
				className='w-[62px] h-[28px] text-white text-[20px] leading-[27px] font-[500] cursor-pointer'
			>
				{name}
			</NavLink>
		</div>
	)
}

export default NavbarLinks
