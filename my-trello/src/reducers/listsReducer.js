const initialState = [
	{
		title: 'Last Episode',
		id: 0,
		cards: [
			{
				id: 0,
				text: 'we created a static list and static card'
			},
			{
				id: 1,
				text: 'we used a mix between material UI React and styled component'
			}
		]
	},
	{
		title: 'This Episode',
		id: 1,
		cards: [
			{
				id: 0,
				text: 'we will create our firts reducer'
			},
			{
				id: 1,
				text: 'and render many cards'
			},
			{
				id: 2,
				text:'we will also create some little changes'
			}
		]
	}
];


const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default listsReducer;