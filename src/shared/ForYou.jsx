function ForYou({ icon, title, text }) {
	return (
		<div className='w-[200px] col-span-1 h-[150px]'>
			<div className='flex'>
				<img width={30} height={25} src={icon} alt='' />
				<p className='text-lg md:text-3xl text-[#7A7156]'>{title}</p>
			</div>
			<p className='mt-4 text-sm md:text-xl text-[#B2AEA0]'>{text}</p>
		</div>
	)
}

export default ForYou
