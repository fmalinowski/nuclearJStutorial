import React from 'react'

import ProductItem from 'nuclear-js/examples/shopping-cart/components/ProductItem'
import ProductsList from 'nuclear-js/examples/shopping-cart/components/ProductsList'

import reactor from '../reactor'
import getters from '../getters'
import actions from '../actions'

const ProductItemContainer = React.createClass({
	onAddToCartClicked: function() {
		actions.addToCart(this.props.product);
	},

	render: function() {
		return (
			<ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
		);
	}
});

export default React.createClass({
	mixins: [reactor.ReactMixin],

	getDataBindings: function() {
		return {
			products: getters.products,
		}
	},

	render: function() {
		return (
			<ProductsList title="Flux Shop Demo (NuclearJS)">
				{this.state.products.map(product => {
					return <ProductItemContainer key={product.get('id')} product={product.toJS()} />;
				}).toList()};
			</ProductsList>
		);
	}
});
