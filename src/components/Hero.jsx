import { NavLink } from 'react-router-dom'

function Hero({ title, text, text2, image }) {
	return (
		<div className='w-full mx-auto'>
			<div className='flex items-center justify-between bg-[#EDBFE3] p-4 lg:p-0'>
				{/* Left Section */}
				<div className='container pt-10 flex flex-col items-start lg:mt-[150px] lg:ml-[50px] text-center lg:text-left'>
					<h1
						className={`font-[400] pt-14 lg:pt-10 xl:text-[120px] uppercase text-[#7A7156] ${
							text2
								? 'md:text-[80px] md:leading-[92px] text-3xl lg:text-[120px] lg:leading-[138px]'
								: 'md:text-[120px] md:leading-[138px] text-3xl'
						}`}
					>
						{title}
					</h1>
					<p className='mt-4 text-white font-[400] text-[20px] lg:text-[26px] leading-[30px] lg:leading-[35px]'>
						{text}
					</p>
					{text2 && (
						<p className='mt-2 mb-4 text-white font-[400] text-[20px] lg:text-[26px] leading-[30px] lg:leading-[35px]'>
							{text2}
						</p>
					)}
					<button className='w-[260px] lg:w-[355px] h-[80px] lg:h-[104px] mt-6 focus:outline-none'>
						<NavLink to='/lesson'>
							<img
								src='/lessonbtn.png'
								alt='Lesson Button'
								className='w-full h-full object-cover'
							/>
						</NavLink>
					</button>
				</div>

				{/* Right Section */}
				<div className='container pt-10 flex justify-center items-center mt-10 lg:mt-0'>
					<img
						src={image}
						className='w-[300px] object-scale-down h-[300px] pt-20 lg:w-[700px] lg:h-[700px]'
						alt='Hero'
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
