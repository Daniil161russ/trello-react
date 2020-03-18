import { CONSTANTS } from '../actions'

export const addList = (title) => {
	return {
		type: CONSTANTS.ADD_LIST,
		payload: title
	}
}

export const sort = (
	droppableIdSrart,
	droppableIdEnd,
	droppableIndexSrart,
	droppableIndexEnd,
	draggableId
) => {
	return {
		type: CONSTANTS.DRAG_HAPPENED,
		payload: {
			droppableIdSrart,
			droppableIdEnd,
			droppableIndexSrart,
			droppableIndexEnd,
			draggableId
		}
	}
}