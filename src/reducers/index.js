import * as types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/InitialState';

export default rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.UPDATE:
			return {
        ...state,
        markdown: action.payload
      }
		default:
			return state;
	}
}
