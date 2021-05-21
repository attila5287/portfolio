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
		'title': 'fas fa-id-card text-2xl',
		'image0': 'fas fa-image text-2xl',
		'image1': 'fas fa-image text-2xl',
		'image2': 'fas fa-image text-2xl',
		'url': 'fas fa-external-link-alt text-2xl',
		'desc': 'fas fa-receipt text-2xl',
		'lang': 'fas fa-code text-2xl',
		'libs': 'fas fa-book text-2xl',
		'date': 'fas fa-calendar-check text-2xl',
		'tags': 'fas fa-tags text-2xl'
	}
};

export default helpers;
