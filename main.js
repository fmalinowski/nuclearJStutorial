import reactor from './reactor'
import ProductStore from './stores/ProductStore'
import CartStore from './stores/CartStore'
import actions from './actions'
import getters from './getters'
import React from 'react'
import App from './components/App'

reactor.registerStores({
	'products': ProductStore,
	'cart': CartStore
});

console.log("evaluate all");
console.log(reactor.evaluate([]));

console.log("evaluate products");
console.log(reactor.evaluate(['products']));

console.log("fetch products");
actions.fetchProducts();

console.log("get products related to quantities");
var aGetter = reactor.evaluate([
	['cart', 'itemQty'],
	['products'],
	(itemQty, products) => {
		return itemQty.map((qty, itemId) => {
			return toImmutable({
				product: products.get(itemId),
				quantity: qty
			});
		}).toList();
	}
]);
console.log(aGetter);

console.log('user getter `products`');
console.log(reactor.evaluate(getters.products));

console.log('user getter `cartProducts`');
console.log(reactor.evaluate(getters.cartProducts));

console.log('user getter `cartTotal`');
console.log(reactor.evaluate(getters.cartTotal));

React.render(<App />, document.getElementById('flux-app'));
