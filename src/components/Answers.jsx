import AnswerCard from '@/shared/AnswerCard'

function Answers() {
	return (
		<div className='w-full flex items-center flex-col mx-auto md:h-[900px]'>
			<h1 className='uppercase text-2xl md:font-[400] md:text-[86px] md:leading-[100px] text-center text-[#7A7156]'>
				Ответы
			</h1>
			<p className='md:font-[700] md:text-[36px] text-2xl md:leading-[49px] text-[#7A7156] text-center'>
				на часто задааемые вопросы
			</p>
			{[...Array(6)].map((_, idx) => (
				<AnswerCard key={idx} />
			))}
			<div className='mt-10 w-full mx-auto flex items-center flex-col'>
				<h2 className='md:font-[800] text-xl md:text-[32px] md:leading-[43px] text-[#7A7156] text-center'>
					Остались Вопросы ?
				</h2>
				<p className='md:font-[400] text-sm md:text-[20px] text-center md:leading-[27px] text-[#A7A290]'>
					Напишите нам в техподдержку и мы свяжемся с вами в ближайшее время и
					ответим на ваши вопросы
				</p>
				<button className='focus:outline-none md:-mt-20 -mt-12 border-none size-48 md:size-96 hover:outline-none bg-transparent'>
					<img src='/Helpbtn.png' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Answers
