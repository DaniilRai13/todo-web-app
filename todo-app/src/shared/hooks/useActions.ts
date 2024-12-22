import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import * as userActions from '../../store/user/user.actions.ts'

const rootActions = {
	...userActions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => {
		return bindActionCreators(rootActions, dispatch)
	}, [dispatch])
}