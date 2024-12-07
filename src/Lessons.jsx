import Hero from './components/Hero'
import LessonsSection from './components/LessonsSection'
import Navbar from './components/Navbar'
import Students from './components/Students'
import Works from './components/Works'
import { HeroData } from './data'

function Lessons() {
	return (
		<>
			<Navbar />
			{HeroData.slice(1).map((item, idx) => (
				<Hero key={idx} {...item} />
			))}
			<LessonsSection />
			<div className='bg-[#EDBFE3] mt-10 container'>
				<img
					src='/Sale.png'
					alt=''
					className='mx-auto mt-5 -mb-10'
					width={1270}
					height={448}
				/>
				<Students />
			</div>
			<div className='mt-10 w-full mx-auto'>
				<img
					src='/whatsonthelist.png'
					width={900}
					className='mx-auto'
					height={927}
					alt=''
				/>
			</div>
			<Works />
		</>
	)
}

export default Lessons
