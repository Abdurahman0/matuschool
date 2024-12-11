import { NavLink } from 'react-router-dom'

function Hero({ title, text, text2, image }) {
	return (
		<div className='bg-[#EDBFE3]'>
			<div className='w-full container mx-auto'>
				<div className='flex items-center flex-col md:flex-row md:justify-between p-4 lg:p-0'>
					{/* Left Section */}
					<div className='pt-10 flex flex-col items-start text-start'>
						<h1
							className={`pt-14 text-5xl md:text-9xl lg:pt-10 uppercase text-[#7A7156] ${
								text2 ? 'text-4xl md:text-8xl' : ''
							}`}
						>
							{title}
						</h1>
						<p className='mt-4 text-2xl md:text-4xl text-white'>{text}</p>
						{text2 && (
							<p className='mt-2 mb-4 text-2xl md:text-4xl text-start text-white'>
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
					<div className='md:pt-10 flex justify-center items-center md:mt-10 lg:mt-0'>
						<img
							src={image}
							className='w-[300px] object-contain h-[300px] md:pt-20 lg:w-full lg:h-[1000px]'
							alt='Hero'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
