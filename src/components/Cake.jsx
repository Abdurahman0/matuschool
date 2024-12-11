function Cake() {
	return (
		<div className='w-full mx-auto bg-white'>
			<div className='pt-16 flex flex-col md:flex-row items-center justify-center gap-x-10'>
				<div className='flex flex-col justify-center gap-y-3'>
					<span className='text-[#B2AEA0] text-xl md:text-3xl'>
						бисквитный торт
					</span>
					<h1 className='text-[#7A7156] text-3xl md:text-6xl uppercase'>
						Красный бархат <br /> с клубникой
					</h1>
					<p className='text-[#B2AEA0] text-xl md:text-3xl'>
						Яркий, насыщенный, безумно <br /> вкусный торт с клубникой
					</p>
				</div>
				<img src='/barxat.png' alt='' />
			</div>
			<div className='flex flex-col md:flex-row items-center justify-center gap-x-16'>
				<img src='/barxat.png' alt='' />
				<div>
					<span className='text-2xl md:text-5xl text-[#7A7156]'>
						Состав торта:
					</span>
					<ol className='text-xl md:text-3xl list-decimal ml-6 text-[#7A7156]'>
						<li>Бисквит красный бархат</li>
						<li>Прослойка из клубничного муса</li>
						<li>Клубничный кули</li>
						<li>Кремчиз на масле</li>
					</ol>
				</div>
			</div>
		</div>
	)
}

export default Cake
