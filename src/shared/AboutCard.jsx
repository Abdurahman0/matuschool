function AboutCard({ color, bColor, textColor, title, text }) {
	return (
		<div className='flex flex-col items-center'>
			<div
				className='w-[60px] h-[60px] md:w-[118px] md:h-[110px] border-[2px] flex justify-center items-center rounded-[20px]'
				style={{
					backgroundColor: color,
					borderColor: bColor,
				}}
			>
				<p
					className='text-lg md:font-[600] md:text-[29px] md:leading-[32px]'
					style={{
						color: textColor,
					}}
				>
					{title}
				</p>
			</div>
			<p className='test-lg md:font-[600] md:text-[24px] md:leading-[27px] text-center text-[#B2AEA0]'>
				{text}
			</p>
		</div>
	)
}

export default AboutCard
