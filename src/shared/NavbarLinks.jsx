import { Link } from 'react-scroll'

function NavbarLinks({ name, href }) {
	return (
		<div>
			<Link
				to={href}
				smooth={true}
				duration={500}
				className='w-[62px] h-[28px] text-white text-[20px] leading-[27px] font-[500] cursor-pointer'
			>
				{name}
			</Link>
		</div>
	)
}

export default NavbarLinks
