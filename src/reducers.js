import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILURE} from './constants.js';

	const initialStateSearch={
		searchField: ''
	}

	const initialStateRobots={
		isPending: false,
		robots: [],
		error: ''
	}


	export const searchRobotsReducer=(state=initialStateSearch, action={})=>{
		switch(action.type){
			case CHANGE_SEARCH_FIELD:
	           //return Object.assign({},state,{searchField:action.payload});
	           return {...state, searchField:action.payload};
	        default:
	           return state;
        }
    }

export const requestRobotsReducer=(state=initialStateRobots, action={})=>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
		return Object.assign({},state,{isPending: true});
		case REQUEST_ROBOTS_SUCCESS:
		return Object.assign({},state,{isPending: false, robots:action.payload});
		case REQUEST_ROBOTS_FAILURE:
		return Object.assign({},state,{isPending:false, error:action.payload});
		default:
		return state;
	}
}
