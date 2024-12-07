function SeparatwLesson({ image, title, description, cost, id }) {
	return (
		<div key={id} className=''>
			<img src={image} alt='' />
			<div className=''>
				<h1>{title}</h1>
				<span>{cost}</span>
				<button>Купить рецепт</button>
				<p>{description}</p>

				<p>Состав урока:</p>
				<ol>
					<li></li>
				</ol>
			</div>
		</div>
	)
}

export default SeparatwLesson
