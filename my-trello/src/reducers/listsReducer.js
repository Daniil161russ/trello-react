import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 6;

const initialState = [
	{
		title: 'Last Episode',
		id: `list-${0}`,
		cards: [
			{
				id: `card-${0}`,
				text: 'we created a static list and static card'
			},
			{
				id: `card-${1}`,
				text: 'we used a mix between material UI React and styled component'
			}
		]
	},
	{
		title: 'This Episode',
		id: `list-${1}`,
		cards: [
			{
				id: `card-${2}`,
				text: 'we will create our firts reducer'
			},
			{
				id: `card-${3}`,
				text: 'and render many cards'
			},
			{
				id: `card-${4}`,
				text:'we will also create some little changes'
			},
			{
				id: `card-${5}`,
				text:'we will also make some little changes'
			}
		]
	}
];


const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards:[],
				id: `list-${listID}`
			}
			listID += 1
			return [...state, newList];

		case CONSTANTS.ADD_CARD: {
			const newCard = {
				text: action.payload.text,
				id: `card-${cardID}`
			}
			cardID += 1

			const newState = state.map(list => {
				if(list.id === action.payload.listID){
					return {
						...list,
						cards: [...list.cards, newCard]
					}
				} else {
					return list;
				}
			});
			return newState; 
		}
		
		case CONSTANTS.DRAG_HAPPENED:

			const {
				droppableIdSrart,
				droppableIdEnd,
				droppableIndexSrart,
				droppableIndexEnd,
				draggableId
			} = action.payload;
			const newState = [...state];

			// in the same list
			if(droppableIdSrart === droppableIdEnd) {
				const list = state.find(list => droppableIdSrart === list.id);
				const card = list.cards.splice(droppableIndexSrart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
			}

			return newState;

		default:
			return state;
	}
};

export default listsReducer;