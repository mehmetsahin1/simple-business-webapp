import { useSelector, useDispatch } from "react-redux";
import { handleCurrency, handlePrice } from "../functions";
import { removeItemFromCart, emptyCart } from "../store/storeSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import cx from "classnames";

function Cart(props) {
  const items = useSelector((state) => state.store.cart);
  const activeCurrency = useSelector((state) => state.store.activeCurrency);
  const currencyDiffs = useSelector((state) => state.store.currencyDiffs);
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return handlePrice(total, currencyDiffs, activeCurrency);
  };

  const handleCheckout = () => {
    if (items.length !== 0) {
      MySwal.fire({
        title: <p>Your purchase completed!</p>,
        icon: "success",
      });

      dispatch(emptyCart());
    } else {
      MySwal.fire({
        title: <p>You don't have any product!</p>,
        icon: "error",
      });
    }
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItemFromCart(index));
  };

  return (
    <div
      className={cx({
        block: props.active,
        hidden: !props.active,
        absolute: true,
        "top-7": true,
        "right-0": true,
        "w-96": true,
        border: true,
        "bg-white": true,
        "text-black": true,
      })}
    >
      {items.map((item, index) => {
        return (
          <div className="p-4 flex border-b border-slate-200" key={index}>
            <div>
              <img src={item.image} alt="" width={40} height={40} />
            </div>
            <div className="ml-4 grow">
              <h1>{item.name}</h1>
              <p>
                <span>{handleCurrency(activeCurrency)}</span>
                {handlePrice(item.price, currencyDiffs, activeCurrency)}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="text-red-500"
                onClick={() => handleRemoveItem(index)}
              >
                <i className="ri-close-line"></i>
              </button>
            </div>
          </div>
        );
      })}
      <div className="m-4 mb-2 text-right">
        TOTAL: <span>{handleCurrency(activeCurrency)}</span>{" "}
        <span>{calculateTotalPrice()}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-red-500 text-sm text-white px-4 py-2 float-right m-4 mt-0 rounded-md"
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
