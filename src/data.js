import mask from '/public/Mask group.png'
import star from '/public/Star.png'
import hat from '/public/Hat.png'
import person from '/public/Person.png'
import cake1 from '/public/cake1.png'
import cake2 from '/public/cake2.png'
import cake3 from '/public/cake3.png'

export const navlinks = [
	{ name: 'Акции', href: '/sale' },
	{ name: 'Отзывы', href: '/coments' },
	{ name: 'Техподдержка', href: '/help' },
]

export const forYouData = [
	{
		icon: mask,
		title: 'Любитель',
		text: 'Хотите научится готовить вкусные и красивые торты для себя и близких',
	},
	{
		icon: star,
		title: 'Новичок',
		text: 'Очень хотите начать, но сомневаетесь, что сможете так же, как и другие кондитеры',
	},
	{
		icon: hat,
		title: 'Опытный',
		text: 'Вы уже опытный кондитер и хотите расширить свой ассортимент',
	},
	{
		icon: person,
		title: 'Ученик',
		text: 'Хотите освоить новый вид деятельности и начать на этом зарабатывать',
	},
]

export const aboutData = [
	{
		textColor: '#FFFFFF',
		bColor: '#EDBFE3',
		color: '#EDBFE3',
		title: '12 лет',
		text: 'опыта',
	},
	{
		textColor: '#7A7156',
		bColor: '#EDBFE3',
		color: '',
		title: '400+',
		text: 'учеников',
	},
	{
		textColor: '#7A7156',
		bColor: '#EDBFE3',
		color: '',
		title: '800+',
		text: 'работ',
	},
]

export const imageData = [
	{
		image: cake1,
	},
	{
		image: cake2,
	},
	{
		image: cake3,
	},
]
