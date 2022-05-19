import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/storeSlice";
import { handleCurrency, handlePrice } from "../functions";

function ItemCard(props) {
  const activeCurrency = useSelector((state) => state.store.activeCurrency);
  const currencyDiffs = useSelector((state) => state.store.currencyDiffs);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center shadow-md shadow-slate-200 p-6 pt-0 rounded-xl border border-slate-100">
      <img
        src={props.item.image}
        className="hover:scale-110 custom-transition grow"
        alt=""
      />
      <div className="text-center w-full mt-4">
        <h1 className="whitespace-nowrap font-semibold">{props.item.name}</h1>
        <h1 className="whitespace-nowrap font-semibold text-red-500">
          <span>{handleCurrency(activeCurrency)}</span>
          {handlePrice(props.item.price, currencyDiffs, activeCurrency)}
        </h1>
        <button
          onClick={() => {
            dispatch(addToCart(props.item));
          }}
          className="bg-red-500 px-4 py-2 rounded-lg mt-2 text-white hover:bg-red-400 custom-transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
