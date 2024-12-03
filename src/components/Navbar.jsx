import { navlinks } from '@/data'
import NavbarLinks from '@/shared/NavbarLinks'
import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<div className='container z-20 fixed mx-auto flex justify-around gap-20px bg-[#EDBFE3]'>
			<NavLink to={'/'} className='my-2 flex items-center gap-3'>
				<img src={'/matuschool.png'} width={105} height={93} />
				<p className='text-[20px] leading-[27px] font-[500] text-center w-[170px] text-white h-[40px]'>
					Онлайн школа для кондитеров
				</p>
			</NavLink>
			<div className='flex justify-around items-center gap-10'>
				{navlinks.map((item, idx) => (
					<NavbarLinks {...item} key={idx} />
				))}
				<button className='rounded-[8px] border-[#A36C96] hover:border-current bg-transparent w-[260px] h-[65px]'>
					<NavLink to='/room' className={'text-[#693B5F] hover:text-current'}>
						Личный кабинет
					</NavLink>
				</button>
			</div>
		</div>
	)
}

export default Navbar
