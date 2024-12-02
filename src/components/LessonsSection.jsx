function LessonsSection() {
	return (
		<>
			<div className='mt-[50px]'>
				<h1 className='uppercase ml-[360px] font-[700] text-[64px] leading-[73px] text-[#7A7156]'>
					Каталог
				</h1>
				<p className='font-[500] ml-[360px] text-[36px] leading-[49px] text-[#7A7156]'>
					уроков
				</p>
				<div className='grid grid-cols-3 w-[1300px] mx-auto mt-5 gap-y-2'>
					{[...Array(9)].map((_, idx) => (
						<div
							key={idx}
							className='w-[360px] mx-auto col-span-1 h-[560px] rounded-[14px] shadow-md bg-[#D9D9D9]'
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default LessonsSection
