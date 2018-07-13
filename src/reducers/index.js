import { UPDATE_MARKDOWN } from '../constants/actionTypes';
import { INITIAL_STATE } from '../constants/initialState';

const rootReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_MARKDOWN:
			return {
        ...state,
        markdown: action.markdown
      }
		default:
			return state;
	}
}

export default rootReducer;