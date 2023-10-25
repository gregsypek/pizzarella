const fakeCart = [
	{
		pizzaId: 1,
		name: "Mediterranean",
		quantity: 2,
		unitPrice: 12,
		totalPrice: 30,
	},
	{
		pizzaId: 2,
		name: "Vegetale",
		quantity: 1,
		unitPrice: 16,
		totalPrice: 13,
	},
	{
		pizzaId: 3,
		name: "Spinach and Mushroom",
		quantity: 1,
		unitPrice: 18,
		totalPrice: 14,
	},
];

function Cart() {
	const cart = fakeCart;
	return (
		<ul>
			{cart.map((c) => (
				<li key={c.pizzaId}>{c.name}</li>
			))}
		</ul>
	);
}

export default Cart;
