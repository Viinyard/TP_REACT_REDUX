const FILTER_CHANGED= "FILTER_CHANGED";
export const filterChanged = (newFilter) =>{
	return {type : FILTER_CHANGED, filter: newFilter};
}

const COST_ADDED = "COST_ADDED";
export const costAdded = (what, who, how) =>{
	return {type : COST_ADDED, cost:{paidBy: who, title: what, amount: how}};
}

const USER_ADDED = "USER_ADDED";
export const userAdded = (who) => {
  return {type : USER_ADDED, user:who};
}
