import { compare } from '../helpers';
import { RECEIVED_INITIAL_RESULTS, RECEIVED_RESULTS_IMDB_IDS, RECEIVED_FULL_RESULTS, RESET_RESULTS } from '../actions/results';

const INITIAL_STATE = { basicResults: null , basicResultsImdbIds: null, fullResults: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RECEIVED_INITIAL_RESULTS:
      return {...state, basicResults: {
        total_pages: action.payload.total_pages,
        page: action.payload.page,
        results: action.payload.results
      }};
    case RECEIVED_RESULTS_IMDB_IDS:
      return {...state, basicResultsImdbIds: action.payload};
    case RECEIVED_FULL_RESULTS:
      return {...state, fullResults: action.payload.sort(compare)};
    case RESET_RESULTS:
      return {...state, basicResults: INITIAL_STATE.basicResults, basicResultsImdbIds: INITIAL_STATE.basicResultsImdbIds, fullResults: INITIAL_STATE.fullResults};
    default:
      return state;
  }
}