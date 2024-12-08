import { navlinks } from '@/data'
import NavbarLinks from '@/shared/NavbarLinks'
import { NavLink } from 'react-router-dom'
import MobileModal from './Mobile'

function Navbar() {
	return (
		<div className='mx-auto w-full z-20 fixed flex justify-around bg-[#EDBFE3] px-4'>
			<NavLink to='/' className='my-2 flex items-center gap-3'>
				<img
					src='/matuschool.png'
					width={105}
					height={93}
					alt='Matu School Logo'
				/>
				<p className='text-[20px] leading-[27px] font-[500] text-center w-[170px] text-white h-[40px]'>
					Онлайн школа для кондитеров
				</p>
			</NavLink>
			<div className='xl:flex hidden justify-around items-center gap-10'>
				{navlinks.map((item, idx) => (
					<NavbarLinks {...item} key={idx} />
				))}
				<button className='rounded-[8px] border-[#A36C96] hover:border-current bg-transparent w-[260px] h-[65px] transition-all duration-300 ease-in-out'>
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
			<div className='absolute top-[20%] right-[2%] xl:hidden'>
				<MobileModal />
			</div>
		</div>
	)
}

export default Navbar
