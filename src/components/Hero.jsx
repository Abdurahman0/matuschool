function Hero() {
	return (
		<div className='container flex justify-between bg-[#EDBFE3]'>
			<div className='flex flex-col items-start mt-[150px] ml-[360px]'>
				<h1 className='w-[523px] h-[276px] font-[400] text-[120px] leading-[138px] text-[#7A7156]'>
					MATU SCHOOL
				</h1>
				<p className='w-[580px] mt-[40px] text-white h-[72px] font-[400] text-[26px] leading-[35px]'>
					Научись готовить самые{' '}
					<span className='font-[700] text-[26px] leading-[35px]'>
						вкусные, натуральные
					</span>{' '}
					и разнообразные десерты!
				</p>

				<button className='w-[355px] h-[104px] focus:outline-none mt-[30px] bg-transparent hover:border-none border-none outline-none'>
					<img
						src='/lessonbtn.png'
						alt='Lesson Button'
						className='w-full h-full object-cover'
					/>
				</button>
			</div>
			<div className='flex h-[800px] flex-col justify-center items-center'>
				<img
					src='/Clean 2.png'
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
