function Works() {
	return (
		<div className='text-white w-full mx-auto bg-[#EDBFE3]'>
			<p className='md:font-[500] text-3xl text-center pt-10 md:text-[36px] md:leading-[49px]'>
				Работы
			</p>
			<h2 className='uppercase text-4xl text-center md:font-[700] md:text-[80px] md:leading-[100px]'>
				учеников
			</h2>

			<div className='md:flex grid grid-cols-3 justify-center items-center flex-wrap mt-10'>
				<img
					src='/Rectangle1.png'
					width={371}
					height={420}
					className='rounded-[22px] border-none size-48 md:size-96'
					alt=''
				/>
				<img
					src='/Rectangle2.png'
					width={371}
					height={420}
					className='rounded-[22px] border-none size-48 md:size-96'
					alt=''
				/>
				<img
					src='/Rectangle3.png'
					width={371}
					height={420}
					className='rounded-[22px] border-none size-48 md:size-96'
					alt=''
				/>
			</div>
		</div>
	)
}

export default Works
