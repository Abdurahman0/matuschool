function CakeCard({ number, title, src, title2 }) {
	return (
		<div className='md:gap-4 flex items-center justify-center flex-col'>
			<p className='text-[#7A7156] text-lg md:text-2xl'>{number} этап</p>
			<h1 className='uppercase text-2xl md:text-5xl text-[#7A7156]'>
				{' '}
				{title}
			</h1>
			<h1 className='uppercase text-2xl md:text-5xl text-[#7A7156]'>
				{' '}
				{title2}
			</h1>
			<div>
				<iframe
					className='border rounded-xl my-4 w-[400] h-[200] md:w-[800px] md:h-[420px]'
					src={src}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowfullscreen
				></iframe>
			</div>
		</div>
	)
}

export default CakeCard
