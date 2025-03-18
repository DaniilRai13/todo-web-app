import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import './App.scss';
import Layout from './components/layout/Layout';
import Calendar from './components/pages/Calendar/Calendar';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile';
import Todos from './components/pages/Todos/Todos';
import { pageRoutes } from './config/pageRoutes';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import Alert from './shared/notification/Alert';
import { saveUserToStorage } from './store/user/user.localstorage';

function App() {
	const { user, isSuccess, error } = useTypedSelector(({ user }) => user);
	const { resetStatus } = useActions();

	useEffect(() => {
		if (isSuccess && user) saveUserToStorage(user);
		if (error || isSuccess) {
			const timer = setTimeout(() => {
				resetStatus();
			}, 2600);

			return () => clearTimeout(timer);
		}
	}, [error, isSuccess, resetStatus, user]);

	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Navigate to='/overview' replace />} />
					<Route path={pageRoutes.overview} element={<Home />} />
					<Route path={pageRoutes.todo_list} element={<Todos />} />
					<Route path={pageRoutes.calendar} element={<Calendar />} />
					<Route path={pageRoutes.profile} element={<Profile />} />
				</Route>
			</Routes>
			<AnimatePresence>
				{error && <Alert type='error' message={error} />}
				{isSuccess && <Alert type='success' />}
			</AnimatePresence>
		</>
	);
}

export default App;
