import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
	en: {
		search: 'Search',
		about: 'About this project',
		by: 'by',
		with: 'with',
		p1: 'This is a personal project carried out through the VueJS Professional Course in Platzi.',
		p2: 'You can find more information in the following links',
		'search-music': 'Search music',
		'search-results': 'Results found',
		'search-no-results': 'No results found',
		'subtitle': 'Music that is'
	},
	es: {
		search: 'Buscar',
		about: 'Acerca de este proyecto',
		by: 'por',
		with: 'con',
		p1: 'Este es un proyecto personal realizado a través del Curso Profesional de VueJS en Platzi.',
		p2: 'Puede encontrar mas información en los siguientes enlaces',
		'search-music': 'Buscar música',
		'search-results': 'Resultados encontrados',
		'search-no-results': 'No se encontraron resultados',
		'subtitle': 'Música que esta'
	}
}

const i18n = new VueI18n({
	messages,
	locale:'es'
})

export default i18n;