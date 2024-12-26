import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { resetStatus } from '../../store/user/userSlice.ts'
import * as userActions from '../../store/user/user.actions.ts'

const rootActions = {
	resetStatus,
	...userActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}