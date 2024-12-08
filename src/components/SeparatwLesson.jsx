import { useData } from '@/context/lesson-context'

function SeparatwLesson() {
	const { LessonData } = useData()
	console.log(LessonData[0])

	return (
		<div className=''>
			<img src='' alt='' />
			<div className=''>
				<h1>{}</h1>
				<span>{}</span>
				<button>Купить рецепт</button>
				<p>{}</p>

				<p>Состав урока:</p>
				<ol>
					<li></li>
				</ol>
			</div>
		</div>
	)
}

export default SeparatwLesson
