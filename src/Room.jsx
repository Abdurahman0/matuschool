import Cake from './components/Cake'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sale from './components/Sale'
import Steps from './components/Steps'
import { HeroData } from './data'

function Room() {
	return (
		<>
			<Navbar />
			{HeroData.slice(2).map((item, idx) => (
				<Hero key={idx} {...item} />
			))}
			<Cake />
			<Steps />
			<Sale />
		</>
	)
}

export default Room
