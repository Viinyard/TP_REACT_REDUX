const initState = {
  costs: [
  { paidBy: 0, title: 'Beer', amount: 15 },
  { paidBy: 1, title: 'Cups', amount: 3},
  { paidBy: 2, title: 'Pizza', amount: 20},
  { paidBy: 0, title: 'Condom', amount: 2}
  ],
  users: [
    'Amine',
    'Julie',
    'Kévin'
  ],
  filter: -1
}

export function filter(state = initState.filter, action){
	switch (action.type){
		case "FILTER_CHANGED":
			return action.filter;
		default:
		return state;
	}
}

export function users(state = initState.users, action){
	switch (action.type){
		case "USER_ADDED":
			return [...state, action.user];
		default:
		return state;
	}
}

export function costs(state = initState.costs, action){
	switch (action.type){
		case "COST_ADDED":
			return [...state, action.cost];
		default:
		return state;
	}
}
