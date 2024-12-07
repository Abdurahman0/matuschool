import { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const LessonCard = createContext()

const LessonContextProvider = props => {
	const cost = '$'
	const title = ''
	const image = ''
	const description = ''

	const value = {
		cost,
		title,
		image,
		description,
	}

	return (
		<LessonCard.Provider value={value}>{props.children}</LessonCard.Provider>
	)
}

export default LessonContextProvider
