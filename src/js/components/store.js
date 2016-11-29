import { createStore } from 'redux';

const reducer = function( state, action ){
	if( state.type === "INC" ){
		return state + 1;
	}
	if( stata.type === "DEC"){
		return state - 1;
	}
	return state ;
} 


const store = createStore( reducer, 0 );


store.subscribe( () => {
	console.log( " store changed ", store.getState())
})

store.dispatch( { 
	type : "INC",
	payload : 1,
});

store.dispatch( {
	type : "DEC",
	payload : 1
})