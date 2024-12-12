import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Form() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})
	const [IsLoading, setIsLoading] = useState(false)

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const SendMessage = e => {
		e.preventDefault()
		setIsLoading(true)
		const token = import.meta.env.VITE_API_KEY
		const chat_id = import.meta.env.VITE_CHAT_ID
		const url = `https://api.telegram.org/bot${token}/sendMessage`
		const messageContent = `Ismi: ${formData.firstName} \n Familyasi: ${formData.lastName} \n Phone: ${formData.phone}`

		axios
			.post(url, {
				chat_id: chat_id,
				text: messageContent,
			})
			.then(() => {
				setFormData({ firstName: '', lastName: '', phone: '' })
				toast.success('Muvaffaqiyatli yuborildi')
				setIsLoading(false)
			})
			.catch(err => {
				toast.error(`Yuborishda xatolik: ${err.message}`)
				setIsLoading(false)
			})
	}
	return (
		<div className='relative flex items-center justify-center px-6 ml-6'>
			<ToastContainer />
			<div className='max-w-4xl w-full p-8 md:p-12'>
				<h2 className='text-4xl font-semibold text-center text-[#797979] mb-10 tracking-wider'>
					Связаться с нами
				</h2>
				<form
					className='flex flex-col gap-8'
					id='myForm'
					onSubmit={SendMessage}
				>
					<div className='left flex flex-col space-y-6'>
						<div className='relative'>
							<input
								type='text'
								name='firstName'
								placeholder='Имя'
								required
								value={formData.firstName}
								onChange={handleInputChange}
								className='w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-[#797979] placeholder-gray-400 transition duration-300'
							/>
						</div>
						<div className='relative'>
							<input
								type='text'
								name='lastName'
								placeholder='Фамилия '
								required
								value={formData.lastName}
								onChange={handleInputChange}
								className='w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-[#797979] placeholder-gray-400 transition duration-300'
							/>
						</div>
						<div className='relative'>
							<input
								type='tel'
								name='phone'
								placeholder='94-654-23-41'
								pattern='\d{2}-\d{3}-\d{2}-\d{2}'
								maxLength={12}
								required
								value={formData.phone}
								onChange={handleInputChange}
								className='w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-[#797979] placeholder-gray-400 transition duration-300'
							/>
						</div>
						<button
							type='submit'
							disabled={IsLoading}
							className={`bg-indigo-500 text-[12px] sm:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform ${
								IsLoading
									? 'cursor-not-allowed opacity-50'
									: 'hover:bg-opacity-40 hover:scale-105'
							}`}
						>
							{IsLoading ? 'Загрузка...' : 'Отправить'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Form
