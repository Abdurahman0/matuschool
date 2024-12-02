function ForYou({ icon, title, text }) {
	return (
		<div className='w-[233px] h-[170px]'>
			<div className='flex'>
				<img width={30} height={25} src={icon} alt='' />
				<p className='font-[600] text-[28px] leading-[35px] text-[#7A7156]'>
					{title}
				</p>
			</div>
			<p className='font-[400] mt-4 text-[#B2AEA0] text-[24px] leading-[30px]'>
				{text}
			</p>
		</div>
	)
}

export default ForYou
