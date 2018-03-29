import { combineEpics, createEpicMiddleware } from 'redux-observable';

// these are all epic actions, like written in the above example
import { fetchPokemonsEpic } from './features/app/app.epics';

//this combineEpics function simple takes each epic as an argument and creates a single root 'epic' 
const rootEpic = combineEpics(
    fetchPokemonsEpic,
);

// createEpicMiddleware wraps your combined epic, and creates the hooks for it listen to redux's middlware system
export const epicMiddleware = createEpicMiddleware(rootEpic);