// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/main";



// const main = document.getElementById('main');
// ReactDOM.render(<App/>, main);

import { combineReducers , createStore } from 'redux';

const userReducer = (state = {} , action) => {
	switch( action.type ){
		case "changeName" : {
			state = {...state, name : action.payload}
			break	
		}
		case "changeAge" : {
			state = {...state, age : action.payload}
			break;
		}
	}
	return state;
};

const tweetsReducer = ( state = [] , action) => {
	return state;
}

const reducer = combineReducers({
	user : userReducer,
	tweets : tweetsReducer
})

const store = createStore( reducer, {
	user : {
		name : "Pigh",
		age : 92
	},
	tweets : []
} );

store.subscribe( () => {
	console.log( " store changed ", store.getState())
})

store.dispatch( { 
	type : "changeName",
	payload : "Wonka",
});


store.dispatch( { 
	type : "changeAge",
	payload : 82,
});


store.dispatch( { 
	type : "changeAge",
	payload : 12,
});
