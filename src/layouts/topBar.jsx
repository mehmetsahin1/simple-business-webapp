import { changeCategory } from "../store/storeSlice";
import { useDispatch } from "react-redux";

function TopBar() {
  const dispatch = useDispatch();

  const handleCategory = (category) => {
    dispatch(changeCategory(category));
  };

  return (
    <div className="border-b border-slate-200">
      <div className="container mx-auto">
        <ul className="flex">
          <li
            onClick={() => {
              handleCategory("");
            }}
            className="pr-6 py-4 text-lg font-light cursor-pointer hover:text-red-500"
          >
            Home
          </li>
          <li
            onClick={() => {
              handleCategory("computer");
            }}
            className="px-6 py-4 text-lg font-light cursor-pointer hover:text-red-500"
          >
            Computer
          </li>
          <li
            onClick={() => {
              handleCategory("mobile");
            }}
            className="px-6 py-4 text-lg font-light cursor-pointer hover:text-red-500"
          >
            Mobile
          </li>
          <li
            onClick={() => {
              handleCategory("gaming");
            }}
            className="px-6 py-4 text-lg font-light cursor-pointer hover:text-red-500"
          >
            Gaming
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
