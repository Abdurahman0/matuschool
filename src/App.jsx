import Answers from './components/Answers'
import Hero from './components/Hero'
import Lessons from './components/Lessons'
import Navbar from './components/Navbar'
import Students from './components/Students'
import Teaching from './components/Teaching'
import { HeroData } from './data'

function App() {
	return (
		<div className='container mx-auto'>
			<Navbar />
			{HeroData.slice(0, 1).map((item, idx) => (
				<Hero key={idx} {...item} />
			))}
			<Lessons />
			<Teaching />
			<Students />
			<Answers />
		</div>
	)
}

export default App
