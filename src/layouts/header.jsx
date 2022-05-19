import { useState } from "react";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrency } from "../store/storeSlice";

function BaseHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const activeCurrency = useSelector((state) => state.store.activeCurrency);
  const dispatch = useDispatch();
  const currencies = ["USD", "EUR", "TRY"];

  const handleCurrency = (currency) => {
    dispatch(changeCurrency(currency));
    setIsOpen(false);
  };

  return (
    <div className="bg-slate-900 py-4">
      <div className="container mx-auto text-white">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm">Free Ground Shipping Over $250</span>
          </div>
          <div className="relative">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              {activeCurrency}
            </span>
            <div
              className={cx({
                "flex-col": true,
                hidden: !isOpen,
                flex: isOpen,
                absolute: true,
                "text-black": true,
                border: true,
                "px-2": true,
                "py-1": true,
                "-left-0.5": true,
                "bg-white": true,
                "z-10": true,
              })}
            >
              {currencies.map((cur, index) => (
                <span
                  onClick={() => {
                    handleCurrency(cur);
                  }}
                  className="cursor-pointer py-1"
                  key={index}
                >
                  {cur}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseHeader;
