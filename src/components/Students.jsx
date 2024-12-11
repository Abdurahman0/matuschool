import { StudentData } from '@/data'
import StudentCard from '@/shared/StudentCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { useRef } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

function Students() {
	const swiperRef = useRef()

	return (
		<div className='w-full mx-auto' id='coments'>
			<h1 className='uppercase text-3xl md:font-[700] md:text-[80px] md:leading-[92px] pt-10 text-center text-[#7A7156]'>
				Ученики
			</h1>
			<p className='md:font-[500] md:text-[36px] text-xl md:leading-[49px] text-center text-[#7A7156]'>
				довольные результатом обучения
			</p>
			<div className='mt-3 mx-auto w-full flex justify-center items-center gap-2'>
				{/* Left Button */}
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					style={{ height: '50px', width: '50px' }}
					className='custom-prev hidden sm:flex focus:outline-none bg-[#EFC6E6] text-white p-4 rounded-full transition-all'
				>
					<FaArrowLeft color='#7A7156' />
				</button>

				{/* Swiper Component */}
				<div className='max-w-96 xl:max-w-[1150px]'>
					<Swiper
						direction='horizontal'
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						onBeforeInit={swiper => {
							swiperRef.current = swiper
						}}
						spaceBetween={10}
						breakpoints={{
							640: {
								slidesPerView: 1,
							},
							1280: {
								slidesPerView: 3,
							},
						}}
						navigation={{
							prevEl: '.custom-prev', // Connect the prev button to Swiper
							nextEl: '.custom-next', // Connect the next button to Swiper
						}}
					>
						{StudentData.map((item, id) => (
							<SwiperSlide key={id}>
								<StudentCard {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Right Button */}
				<button
					className='custom-next hidden sm:flex bg-[#EFC6E6] text-white focus:outline-none p-4 rounded-full transition-all'
					onClick={() => swiperRef.current?.slideNext()}
					style={{ height: '50px', width: '50px' }}
				>
					<FaArrowRight color='#7A7156' />
				</button>
			</div>
		</div>
	)
}

export default Students
