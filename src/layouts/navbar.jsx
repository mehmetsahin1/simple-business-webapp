import { useState, useEffect } from "react";
import { changeCategory, searchItems } from "../store/storeSlice";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../components/cart";

function Navbar() {
  const itemCount = useSelector((state) => state.store.cart.length);
  const [isCartActive, setCartActive] = useState(false);
  const activeCategory = useSelector((state) => state.store.activeCategory);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (search.length > 0) {
      dispatch(changeCategory(""));
      dispatch(searchItems(search));
    } else {
      dispatch(changeCategory(""));
      dispatch(searchItems(search));
    }
  };

  useEffect(() => {
    dispatch(searchItems(""));
    setSearch("");
  }, [activeCategory]);

  return (
    <div className="border-b border-slate-200 py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl text-red-500 font-extrabold logo relative select-none">
              Shopwise
            </h1>
          </div>
          <div className="relative">
            <input
              className="border border-slate-200 rounded-full pl-4 pr-12 pt-2 pb-1.5 w-96 outline-none"
              type="text"
              placeholder="Search for products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => {
                handleSearch();
              }}
              className="bg-red-500 w-8 h-8 rounded-full text-white absolute right-1 top-1"
            >
              <i className="ri-search-line"></i>
            </button>
          </div>
          <div className="text-xl hover:text-red-500 flex items-center select-none cursor-pointer relative">
            <i
              onClick={() => setCartActive(!isCartActive)}
              className="ri-shopping-cart-2-line"
            ></i>
            <span onClick={() => setCartActive(!isCartActive)}>
              ({itemCount})
            </span>
            <Cart active={isCartActive} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
