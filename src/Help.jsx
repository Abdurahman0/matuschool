import { NavLink } from 'react-router-dom'
import Form from './shared/Form'

function Help() {
	return (
		<div className='bg-[#EDBFE3] md:w-screen h-[100vh] md:h-screen flex flex-col items-center justify-center'>
			<div className='md:pb-24 pb-10'>
				<NavLink to='/' className='flex items-center gap-3'>
					<img
						src='/matuschool.png'
						width={105}
						height={93}
						alt='Matu School Logo'
						className='w-[50px] h-[50px] ml-3 md:ml-0 md:w-[105px] md:h-[95px]'
					/>
				</NavLink>
			</div>
			<div className='bg-[url("/bg.png")] md:w-[600px] w-[400px] md:-ml-0 -ml-10 h-[80vh] md:h-[700px]'>
				<div className='flex flex-col items-center text-center gap-3'>
					<h1 className='text-[#797979] text-2xl md:text-5xl pt-3'>
						Напишите нам
					</h1>
					<p className='text-[#797979] text-lg md:text-2xl'>
						Режим работы тех.поддержки
					</p>
					<span className='text-[#797979] font-bold md:text-3xl text-xl'>
						Пн-Сб с 9:00 до 19:00
					</span>
					<p className='text-[#797979] text-base md:text-xl'>
						Время ответа в течениие <br />
						24 часов с момента обращения
					</p>
				</div>
				<Form />
			</div>
		</div>
	)
}

export default Help
