import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { HeroData } from './data'

function Room() {
	return (
		<>
			<Navbar />
			{HeroData.slice(2).map((item, idx) => (
				<Hero key={idx} {...item} />
			))}
		</>
	)
}

export default Room
