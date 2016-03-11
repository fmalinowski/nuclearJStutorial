import {Store, toImmutable} from 'nuclear-js'
import {ADD_TO_CART} from '../actionTypes'

export default Store({
	getInitialState() {
		return toImmutable({ itemQty: {} });
	},
	initialize() {
		this.on(ADD_TO_CART, addToCart);
	}
});

function addToCart(state, {product}) {
	let id = product.id;
	return (state.hasIn(['itemQty', id])
		? state.updateIn(['itemQty', id], quantity => quantity+1)
		: state.setIn(['itemQty', id], 1)
	)
}
