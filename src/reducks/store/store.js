import { legacy_createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { MoviesReducer } from '../movies/reducers';
import { FavouritesReducer } from '../favourites/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            movies: MoviesReducer,
            favourites: FavouritesReducer
        }),
        compose(
            applyMiddleware(thunk)
            // DEBUG MODE
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}