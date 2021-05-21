import code from '../components/seeds/code';

const helpers = {
	prep: (json) => {
		return code;
	},
	headings: [
		'title',
		'image0',
		'image1',
		'image2',
		'url',
		'desc',
		'lang',
		'libs',
		'date',
		'tags'
	],
	headIcons: {
		'title': 'fab fa-react text-2xl',
		'image0': 'fab fa-react text-2xl',
		'image1': 'fab fa-react text-2xl',
		'image2': 'fab fa-react text-2xl',
		'url': 'fab fa-react text-2xl',
		'desc': 'fab fa-react text-2xl',
		'lang': 'fab fa-react text-2xl',
		'libs': 'fab fa-react text-2xl',
		'date': 'fab fa-react text-2xl',
		'tags': 'fab fa-reac text-2xlt'
	}
};

export default helpers;
