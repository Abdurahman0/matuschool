import { imageData } from '@/data'
import ImageCards from '@/shared/ImageCards'

function Teaching() {
	return (
		<div className='w-full mx-auto'>
			<div className='bg-[#EDBFE3] mt-2'>
				<h1 className='text-3xl md:font-[700] md:text-[80px] md:leading-[92px] text-center uppercase text-white mt:pt-24'>
					обучение
				</h1>
				<p className='md:font-[500] md:text-[36px] md:leading-[49px] text-xl text-center text-white'>
					может быть таким
				</p>
				<div className='flex flex-col xl:flex-row items-center justify-center w-full md:w-[800px] xl:w-[1000] mx-auto'>
					{imageData.map((item, idx) => (
						<ImageCards key={idx} {...item} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Teaching
