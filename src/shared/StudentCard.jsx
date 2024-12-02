function StudentCard({ name, job, description, score, date }) {
	return (
		<div className='w-[376px] shadow-2xl mb-10 h-[416px] p-10 rounded-[18px] border-[2px]'>
			<div className='flex justify-between items-center'>
				<img className='border rounded-full' src='/student.png' alt='' />
				<div>
					<p className='font-[600] text-[22px] leading-[26px] text-[#7A7156]'>
						{name}
					</p>
					<p className='font-[400] text-[16px] leading-[19px] text-[#B2AEA0]'>
						{job}
					</p>
				</div>
				<img src='/symbol.png' className='-mt-16' alt='' />
			</div>
			<p className='font-[500] my-4 text-[16px] leading-[19px] text-[#7A7156]'>
				{description}
			</p>
			<div className='flex justify-between items-center'>
				<div className='flex'>
					<img src='/Star 1.png' alt='' />
					<p className='font-[700] text-[16px] leading-[21px] text-[#7A7156]'>
						{score}
					</p>
				</div>
				<p className='font-[500] text-[14px] leading-[16px] text-[#B2AEA0]'>
					{date}
				</p>
			</div>
		</div>
	)
}

export default StudentCard
