import AnswerCard from '@/shared/AnswerCard'

function Answers() {
	return (
		<div className='w-full flex items-center flex-col mx-auto h-[900px]'>
			<h1 className='uppercase font-[400] text-[86px] leading-[100px] text-center text-[#7A7156]'>
				Ответы
			</h1>
			<p className='font-[700] text-[36px] leading-[49px] text-[#7A7156] text-center'>
				на часто задааемые вопросы
			</p>
			{[...Array(6)].map((_, idx) => (
				<AnswerCard key={idx} />
			))}
			<div className='mt-10 w-full mx-auto flex items-center flex-col'>
				<h2 className='font-[800] text-xl md:text-[32px] leading-[43px] text-[#7A7156] text-center'>
					Остались Вопросы ?
				</h2>
				<p className='font-[400] text-sm md:text-[20px] text-center leading-[27px] text-[#A7A290]'>
					Напишите нам в техподдержку и мы свяжемся с вами в ближайшее время и
					ответим на ваши вопросы
				</p>
				<button className='focus:outline-none -mt-20 border-none size-96 hover:outline-none bg-transparent'>
					<img src='/Helpbtn.png' alt='' />
				</button>
			</div>
		</div>
	)
}

export default Answers
