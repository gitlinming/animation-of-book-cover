// const router = new VueRouter({
// 	// mode: 'history',
// 	routes: [
// 		{
// 			path: '/',
// 			component: home,
// 		},
// 		{
// 			path: '/products',
// 			component: products,
// 		},
// 		{
// 			path: '/company',
// 			component: company,
// 		},
// 		{
// 			path: '/contact',
// 			component: contact,
// 		}
// 	],
// 	// scrollBehavior (to, from, savedPosition) {
// 	// 	if (savedPosition) {
// 	// 		return savedPosition
// 	// 	} else {
// 	// 		return { x: 0, y: 0 }
// 	// 	}
// 	// }
// });

var app = new Vue({
	// router,
	el: '#wrap',
	components: {
		// 'navgation': navgation,
		// 'home': home,
		// 'foot': foot
	},
	data: {
		book1borderAction: false,
	},
	created: function(){

	},
	mounted: function () {
		var c = this;
		// this.book1borderAction = true;
		window.setTimeout(function(){
			c.book1borderAction = true;
		},500);
	},
	methods: {

	},
}).$mount('#wrap');