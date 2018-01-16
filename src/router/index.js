import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HeadIndex from '@/components/parts/HeadIndex'
import Booter from '@/components/parts/Booter'
import ShowType from '@/components/ShowType'
import BookInfo from '@/components/BookInfo'
import ChapterInfo from '@/components/ChapterInfo'
import BookSearch from '@/components/BookSearch'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			components: {
				default: Index,
				head: HeadIndex,
				booter: Booter,
			}
		},
		{
			path: '/showType',
			name: 'ShowType',
			components: {
				default:ShowType,
				booter: Booter
			}
		},
		{
			path: '/bookInfo',
			name: 'BookInfo',
			component: BookInfo
		}, 
		{
			path: '/chapterInfo',
			name: 'ChapterInfo',
			component: ChapterInfo
		},
		{
			path: '/bookSearch',
			name: 'BookSearch',
			components: {
				default:BookSearch,
				head: HeadIndex,
				booter: Booter
			}
		}
	]
})