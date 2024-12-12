import { FiDownload } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

function Sale() {
	return (
		<div className='w-full mx-auto pt-10 bg-[#EDBFE3]' id='sale'>
			<div className='flex items-center justify-center flex-col'>
				<div className='bg-white md:w-[700px] w-[350px] h-[200px] border rounded-xl md:h-[300px] flex '>
					<div className='flex flex-col gap-y-2 items-center justify-center'>
						<h1 className='text-[#7A7156] uppercase text-3xl md:text-6xl'>
							Рецепт
						</h1>
						<span className='text-[#B2AEA0] text-xl md:text-2xl'>
							для скачивания
						</span>
						<button className='text-[#7A7156] flex gap-2 items-center justify-center'>
							<FiDownload />
							<span className='md:text-xl text-sm '>Скачать рецепт</span>
						</button>
					</div>
					<img
						src='/RoomSale.png'
						className='md:object-cover object-scale-down border-none rounded-xl w-[200px] h-[272px] md:w-[485px] md:h-[300px] '
						alt=''
					/>
				</div>
				<div className='flex flex-col md:flex-row pt-10'>
					<div className='flex flex-col items-start ml-2 md:ml-0 justify-center md:gap-y-1'>
						<span className='text-xl md:text-2xl text-white'>
							Дарим промокод
						</span>
						<h1 className='text-[#7A7156] uppercase text-3xl md:text-6xl'>
							на скидку!
						</h1>
						<p className='text-xl md:text-2xl text-white'>
							По промокоду Present для вас доступна <br /> скидка 10% на
							следующую покупку рецепту
						</p>
						<button className='w-[260px] lg:w-[355px] h-[80px] lg:h-[104px] mt-6 focus:outline-none'>
							<NavLink to='/lesson'>
								<img
									src='/SaleBtn.png'
									alt='Lesson Button'
									className='w-full h-full object-cover'
								/>
							</NavLink>
						</button>
					</div>
					<img src='/barxat.png' alt='' />
				</div>
			</div>
		</div>
	)
}

export default Sale
