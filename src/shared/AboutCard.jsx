function AboutCard({ color, bColor, textColor, title, text }) {
	return (
		<div className='flex flex-col items-center'>
			<div
				className='w-[118px] h-[110px] border-[2px] flex justify-center items-center rounded-[20px]'
				style={{
					backgroundColor: color,
					borderColor: bColor,
				}}
			>
				<p
					className='font-[600] text-[29px] leading-[32px]'
					style={{
						color: textColor,
					}}
				>
					{title}
				</p>
			</div>
			<p className='font-[600] text-[24px] leading-[27px] text-center text-[#B2AEA0]'>
				{text}
			</p>
		</div>
	)
}

export default AboutCard
