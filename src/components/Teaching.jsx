import { imageData } from '@/data'
import ImageCards from '@/shared/ImageCards'

function Teaching() {
	return (
		<div className='container bg-[#EDBFE3] mt-2'>
			<h1 className='font-[700] text-[80px] leading-[92px] text-center uppercase text-white pt-24'>
				обучение
			</h1>
			<p className='font-[500] text-[36px] leading-[49px] text-center text-white'>
				может быть таким
			</p>
			<div className='flex items-center justify-center w-[1000px] mx-auto'>
				{imageData.map((item, idx) => (
					<ImageCards key={idx} {...item} />
				))}
			</div>
		</div>
	)
}

export default Teaching
