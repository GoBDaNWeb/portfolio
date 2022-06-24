import Header from './components/Header'
import Modal from './components/Modal'
import Main from './pages/Main'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import {
	Route,
	Routes,
	useLocation
} from 'react-router-dom'

import { useTransition, animated } from 'react-spring'
import {useContext} from 'react'
import AppContext from './context/AppContext'

function App() {
	const ctx = useContext(AppContext)
	const location = useLocation()
	const transitions = useTransition(location, { 
		from: { opacity: 0},
		enter: { opacity: 1},
		leave: { opacity: 0},
		config: {
			duration: 200,
		},
	})
 
	return (
		<>
			<div className="bg-zinc-800 h-screen text-white">
				<Header/>
				{
					ctx.isOpenModal 
					&& <Modal/>
				}
				<div className='flex px-28 h-full w-full relative'>
					{
						transitions((props, item) => (
							<animated.div  style={props}>
								<div className='absolute top-0 bottom-0 left-0 right-0'>
									<Routes location={item}>
										<Route path={'/'} element={<Main/>}/>
										<Route path={'/about'} element={<About/>}/>
										<Route path={'/portfolio'} element={<Portfolio/>}/>
									</Routes>
								</div>
							</animated.div>
						))
					}
				</div>
			</div>
		</>
	);
}

export default App;
