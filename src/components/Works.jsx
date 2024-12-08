function Works() {
	return (
		<div className='text-white w-full mx-auto bg-[#EDBFE3]'>
			<p className='font-[500] pt-10 text-[36px] leading-[49px]'>Работы</p>
			<h2 className='uppercase font-[700] text-[80px] leading-[100px]'>
				учеников
			</h2>

			<div className='flex justify-center items-center flex-wrap mt-10'>
				<img
					src='/Rectangle1.png'
					width={371}
					height={420}
					className='rounded-[22px] border-none'
					alt=''
				/>
				<img
					src='/Rectangle2.png'
					width={371}
					height={420}
					className='rounded-[22px] border-none'
					alt=''
				/>
				<img
					src='/Rectangle3.png'
					width={371}
					height={420}
					className='rounded-[22px] border-none'
					alt=''
				/>
			</div>
		</div>
	)
}

export default Works
