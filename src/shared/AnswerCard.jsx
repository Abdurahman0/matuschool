function AnswerCard() {
	return (
		<div className='max-w-[500px] w-[800px] border-b-2 border-[#A7A290] h-[69px] flex justify-between items-center'>
			<p className='font-[500] text-[#7A7156] text-[22px] leading-[25px] text-center'>
				Ниже мы собрали часто задаваемые вопросы и ответили на них
			</p>
			<button className='focus:outline-none border-none hover:outline-none bg-transparent'>
				<img src='/Plus.png' alt='' />
			</button>
		</div>
	)
}

export default AnswerCard
