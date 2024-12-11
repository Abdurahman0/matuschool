function ImageCards({ image }) {
	return (
		<div className='flex relative'>
			<img
				src={image}
				alt=''
				className='object-fill w-60 h-60 md:w-96 md:h-96'
			/>
		</div>
	)
}

export default ImageCards
