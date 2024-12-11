import { CakeCardData } from '@/data'
import CakeCard from '@/shared/CakeCard'

function Steps() {
	return (
		<div className='w-full mx-auto mt-10 bg-white'>
			<div className='flex flex-col gap-3 md:gap-10 items-center justify-center'>
				{CakeCardData.map((item, idx) => (
					<CakeCard {...item} key={idx} />
				))}
			</div>
		</div>
	)
}

export default Steps
