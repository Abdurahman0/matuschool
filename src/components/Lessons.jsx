import { aboutData, forYouData } from '@/data'
import AboutCard from '@/shared/AboutCard'
import ForYou from '@/shared/ForYou'

function Lessons() {
	return (
		<div className='container'>
			<h1 className='mt-10 text-[80px] text-[#7A7156] font-[700] leading-[92px] text-center'>
				МОИ УРОКИ
			</h1>
			<p className='font-[500] text-[36px] text-[#7A7156] text-center leading-[49px]'>
				для вас, если вы:
			</p>
			<div className='flex items-center justify-center gap-5 my-10'>
				{forYouData.map((item, idx) => (
					<ForYou {...item} key={idx} />
				))}
			</div>
			<div className='mt-5 flex'>
				<img src='/Leader.png' width={700} height={700} alt='' />
				<div>
					<p className='font-[500] mt-10 text-[36px] leading-[49px] text-[#7A7156]'>
						Основатель школы
					</p>
					<p className='font-[700] text-[80px] leading-[96px] text-[#7A7156]'>
						Матлюба <br /> Шадиева
					</p>
					<p className='font-[400] text-[#B2AEA0] text-[24px] leading-[32px]'>
						Приветствую,{' '}
						<span className='font-[700] text-[24px] leading-[32px]'>
							меня зовут Матлюба
						</span>
						, <br /> я{' '}
						<span className='font-[700] text-[24px] leading-[32px]'>
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
	)
}

export default Lessons
