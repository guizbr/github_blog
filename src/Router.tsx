import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefautLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout></DefaultLayout>}>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/post" element={<Post></Post>}></Route>
			</Route>
		</Routes>
	)
}
