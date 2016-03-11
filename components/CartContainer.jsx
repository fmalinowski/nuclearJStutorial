import React from 'react'

import Cart from 'nuclear-js/examples/shopping-cart/components/Cart'
import reactor from '../reactor'
import getters from '../getters'
import actions from '../actions'

export default React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings: function() {
		return {
			products: getters.cartProducts,
			total: getters.cartTotal
		}
	},

	onCheckoutClicked: function() {

	},

	render: function() {
		return (
			<Cart products={this.state.products.toJS()} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
		);
	}
});
