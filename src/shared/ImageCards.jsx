function ImageCards({ image }) {
	return (
		<div className='flex relative'>
			<img src={image} alt='' className='object-fill' />
		</div>
	)
}

export default ImageCards
