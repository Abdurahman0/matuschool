import Answers from './components/Answers'
import Hero from './components/Hero'
import Lessons from './components/Lessons'
import Navbar from './components/Navbar'
import Students from './components/Students'
import Teaching from './components/Teaching'

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Lessons />
			<Teaching />
			<Students />
			<Answers />
		</div>
	)
}

export default App
