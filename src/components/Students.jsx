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
		<div className='container' id='coments'>
			<h1 className='uppercase font-[700] text-[80px] leading-[92px] pt-10 text-center text-[#7A7156]'>
				Ученики
			</h1>
			<p className='font-[500] text-[36px] leading-[49px] text-center text-[#7A7156]'>
				довольные результатом обучения
			</p>
			<div className='mt-3 mx-auto flex justify-center items-center gap-6'>
				{/* Left Button */}
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					style={{ height: '50px', width: '50px' }}
					className='custom-prev focus:outline-none bg-[#EFC6E6] text-white p-4 rounded-full transition-all'
				>
					<FaArrowLeft color='#7A7156' />
				</button>

				{/* Swiper Component */}
				<div className='w-full max-w-[1200px]'>
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
							1040: {
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
					className='custom-next bg-[#EFC6E6] text-white focus:outline-none p-4 rounded-full transition-all'
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
