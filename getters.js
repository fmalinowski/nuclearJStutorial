const products = ['products'];

const cartProducts = [
	['cart', 'itemQty'],
	['products'],
	(itemQty, products) => {
		return itemQty.map((qty, productId) => {
			var product = products.get(productId);
			return product.set('quantity', qty).remove('inventory');
		}).toList();
	}
];

const cartTotal = [
	cartProducts,
	(items) => {
		const total = items.reduce((total, item) => {
			return total + item.get('quantity') * item.get('price');
		}, 0) || 0;
		return total.toFixed(2);
	}
];

export default {products, cartProducts, cartTotal};