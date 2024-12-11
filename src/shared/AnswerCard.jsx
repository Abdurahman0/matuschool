function AnswerCard() {
	return (
		<div className='md:w-[800px] w-[400px] border-b-2 border-[#A7A290] h-[69px] flex justify-between items-center'>
			<p className='md:font-[500] text-[#7A7156] md:text-[22px] md:leading-[25px] text-lg md:text-center'>
				Ниже мы собрали часто задаваемые вопросы и ответили на них
			</p>
			<button className='focus:outline-none size-12 md:size-20 text-center border-none hover:outline-none bg-transparent'>
				<img src='/Plus.png' alt='' />
			</button>
		</div>
	)
}

export default AnswerCard
