import { LessonData } from '@/data'
import LessonCard from '@/shared/LessonCard'

function LessonsSection() {
	return (
		<div className='bg-white'>
			<div className='w-full container mx-auto'>
				<div className='mt-[50px]'>
					<h1 className='uppercase text-center font-[700] text-[64px] leading-[73px] text-[#7A7156]'>
						Каталог
					</h1>
					<p className='font-[500] text-center text-[36px] leading-[49px] text-[#7A7156]'>
						уроков
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-5 gap-y-5'>
						{LessonData.map((item, idx) => (
							<LessonCard key={idx} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LessonsSection
