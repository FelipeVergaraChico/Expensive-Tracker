import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Transaction = ({ transaction }) => {
  const { deleTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${numberWithCommas(Math.abs(transaction.amount))}
        </span>
        <button
          onClick={() => deleTransaction(transaction._id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
