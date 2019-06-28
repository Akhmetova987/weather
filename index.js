import React from 'react';

import ReactDOM from 'react-dom';


import App from './App';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import { createStore } from 'redux';

// function films(state = [], action) {
//     if (action.type === 'ADD_MOVIE'){
//     return [
//         ...state,
//         action.payload
//     ];

// }
// return state;
// }

// const store = createStore(films);

// store.subscribe(() => {
//     console.log('subscribe', store.getState());
// })

// store.dispatch({ type: 'ADD_MOVIE', payload: 'Smells like spirit' });

// const addMovieBtn = document.querySelector('.addMovie')[0];
// addMovieBtn.addEventListener('click', () => {
//     const movieName = document.querySelector('.movieInput')[0].value;
//     console.log('movie Name', movieName);


// });