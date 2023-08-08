import { toast } from 'react-toastify';


const MealItemForm = (props) => {

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = 1;
		const enteredAmountNumber = +enteredAmount;

		props.onAddToCart(enteredAmountNumber);
		toast.success(`"${props.title}" has been added to cart.`,{
			position: "top-center",
		})
	};

	return (

			<a style={{cursor:'pointer'}} onClick={submitHandler}>
			<img src="/images/icons/add-cart.png" alt="" />Add to Cart
		  </a>
	);
};

export default MealItemForm;