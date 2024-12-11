import { CiHeart } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'

function LessonCard({ image, title, description, cost, id }) {
	return (
		<NavLink className='w-[360px] rounded-xl border my-10 flex flex-col mx-auto col-span-1 h-[720px] shadow-2xl shadow-gray-900 bg-[#D9D9D9]'>
			<div className='relative'>
				<img
					src={image}
					className='object-scale-down border rounded-xl'
					width={400}
					height={300}
					alt=''
				/>
				<CiHeart
					className='absolute top-5 right-2 border rounded-full bg-white p-2 cursor-pointer focus:scale-50'
					size={50}
				/>
			</div>
			<div className='px-3'>
				<h1 className='text-xl font-bold leading-4 my-4'>{title}</h1>
				{description.map((item, idx) => (
					<p className='text-sm font-semibold pb-4' key={idx}>
						{item}
					</p>
				))}
				<div className='flex justify-between items-center'>
					<span className='text-center text-red-500 font-extrabold text-xl'>
						{cost}
					</span>
					<button className='p-3 shadow-inherit border rounded-xl border-red-700 hover:bg-red-700 hover:text-white'>
						Купить рецепт
					</button>
				</div>
			</div>
		</NavLink>
	)
}

export default LessonCard
