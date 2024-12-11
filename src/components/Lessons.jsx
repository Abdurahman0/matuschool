import { aboutData, forYouData } from '@/data'
import AboutCard from '@/shared/AboutCard'
import ForYou from '@/shared/ForYou'

function Lessons() {
	return (
		<div className='flex items-center justify-center '>
			<div className='w-[60vw] md:w-full'>
				<h1 className='text-[#7A7156] text-center text-3xl md:text-9xl'>
					МОИ УРОКИ
				</h1>
				<p className=' text-[#7A7156] text-2xl md:text-5xl text-center'>
					для вас, если вы:
				</p>
				<div className='md:flex grid grid-cols-1 md:gap-10 pl-2 items-center justify-center mt-3 gap-x-28 md:my-5'>
					{forYouData.map((item, idx) => (
						<ForYou {...item} key={idx} />
					))}
				</div>
				<div className='md:mt-5 w-full flex flex-col-reverse justify-center items-center xl:flex-row'>
					<img src='/Leader.png' width={700} height={700} alt='' />
					<div>
						<p className='text-xl md:text-5xl md:mt-10 text-[#7A7156]'>
							Основатель школы
						</p>
						<p className='text-[#7A7156] text-xl md:text-5xl'>
							Матлюба <br /> Шадиева
						</p>
						<p className='text-[#B2AEA0] text-xl md:text-5xl'>
							Приветствую,{' '}
							<span className='text-xl md:text-5xl'>меня зовут Матлюба</span>
							, <br /> я{' '}
							<span className='text-xl md:text-5xl'>
								спикер и основатель онлайн- <br /> школы
							</span>{' '}
							для кондитеров!
						</p>
						<div className='flex gap-4 mt-6'>
							{aboutData.map((item, idx) => (
								<AboutCard key={idx} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Lessons
