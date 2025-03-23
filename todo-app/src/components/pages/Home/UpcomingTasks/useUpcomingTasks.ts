import { ITask } from '@/config/user.data';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const useUpcomingTasks = () => {
	const { upcomingTasks, isLoading } = useTypedSelector(({ tasks }) => tasks);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isShowMore, setIsShowMore] = useState(false);
	const maxTasks = windowWidth < 1150 && windowWidth > 700 ? 2 : 3;

	const visibleTasks: ITask[] =
		upcomingTasks.length > maxTasks && isShowMore
			? upcomingTasks
			: upcomingTasks.slice(0, maxTasks);

	const updateWindowSize = throttle(() => {
		setWindowWidth(window.innerWidth);
	});

	useEffect(() => {
		window.addEventListener('resize', updateWindowSize);
		return () => window.addEventListener('resize', updateWindowSize);
	}, [updateWindowSize]);

	return {
		isLoading,
		setIsShowMore,
		isShowMore,
		visibleTasks,
	};
};

export default useUpcomingTasks;
