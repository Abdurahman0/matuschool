/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react'
import {
	navlinks,
	forYouData,
	aboutData,
	imageData,
	StudentData,
	HeroData,
	LessonData,
} from '../data.js' // Adjust the import path as needed

// Create Context
const DataContext = createContext()

// Create Provider Component
export const DataProvider = ({ children }) => {
	const value = {
		navlinks,
		forYouData,
		aboutData,
		imageData,
		StudentData,
		HeroData,
		LessonData,
	}

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

// Custom Hook for easier consumption
export const useData = () => {
	return useContext(DataContext)
}
