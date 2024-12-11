import { navlinks } from '@/data'
import NavbarLinks from '@/shared/NavbarLinks'
import { NavLink } from 'react-router-dom'
import MobileModal from './Mobile'

function Navbar() {
	return (
		<div className='bg-[#EDBFE3] w-full flex justify-between md:justify-around items-center mx-auto z-10 fixed'>
			<NavLink to='/' className='my-2 flex items-center gap-3'>
				<img
					src='/matuschool.png'
					width={105}
					height={93}
					alt='Matu School Logo'
					className='w-[50px] h-[50px] ml-3 md:ml-0 md:w-[105px] md:h-[95px]'
				/>
				<p className='text-center hidden sm:flex text-white'>
					Онлайн школа <br /> для кондитеров
				</p>
			</NavLink>
			<div className='hidden sm:flex justify-around items-center gap-10'>
				{navlinks.map((item, idx) => (
					<NavbarLinks {...item} key={idx} />
				))}
				<button className='rounded-[8px] border-[#A36C96] hover:border-current bg-transparent transition-all duration-300 ease-in-out'>
					<NavLink
						to='/room'
						className={({ isActive }) =>
							isActive
								? 'text-[#693B5F] font-bold'
								: 'text-[#693B5F] hover:text-current'
						}
					>
						Личный кабинет
					</NavLink>
				</button>
			</div>
			<div className='absolute top-2 right-2 sm:hidden'>
				<MobileModal />
			</div>
		</div>
	)
}

export default Navbar
