import shop from 'nuclear-js/examples/shopping-cart/common/api/shop'
import reactor from './reactor'
import {
	RECEIVE_PRODUCTS,
    ADD_TO_CART,
    CHECKOUT_START,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILED,
} from './actionTypes'

export default {
	fetchProducts() {
		shop.getProducts(products => {
			debugger;
			reactor.dispatch(RECEIVE_PRODUCTS, {products})
		});
	},
	addToCart(product) {
		reactor.dispatch(ADD_TO_CART, {product})
	}
}
