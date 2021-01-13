import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView2192476Reducer from '../features/CalendarView2192476/redux/reducers';
import SignIn43192475Reducer from '../features/SignIn43192475/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView2192476: CalendarView2192476Reducer,
SignIn43192475: SignIn43192475Reducer,

});