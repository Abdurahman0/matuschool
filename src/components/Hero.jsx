import { NavLink } from 'react-router-dom'

function Hero({ title, text, text2, image }) {
	return (
		<div className='container flex justify-between bg-[#EDBFE3]'>
			<div className='flex flex-col items-start mt-[150px] ml-[360px]'>
				<h1
					className={`w-[523px] h-[276px] font-[400] text-[120px] uppercase leading-[138px] text-[#7A7156] ${
						text2 && 'text-[80px] leading-[92px] -mb-24'
					}`}
				>
					{title}
				</h1>
				<p className='w-[580px] mt-[40px] text-white h-[72px] font-[400] text-[26px] leading-[35px]'>
					{text}
				</p>
				{text2 && (
					<p className='w-[580px] -mt-10 mb-10 text-white h-[60px] font-[400] text-[26px] leading-[35px]'>
						{text2}
					</p>
				)}

				<button className='w-[355px] h-[104px] focus:outline-none mt-[30px] bg-transparent hover:border-none border-none outline-none'>
					<NavLink to={'/lesson'}>
						<img
							src='/lessonbtn.png'
							alt='Lesson Button'
							className='w-full h-full object-cover'
						/>
					</NavLink>
				</button>
			</div>
			<div className='flex h-[800px] flex-col justify-center items-center'>
				<img
					src={image}
					width={700}
					height={700}
					className='mt-[136px] overflow-hidden'
					alt=''
				/>
			</div>
		</div>
	)
}

export default Hero
