import React from "react";
import { FaBoxOpen, FaGift, FaStar } from "react-icons/fa";

const InfoCards = () => {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      <div className="bg-[var(--main-bg-color)] rounded-lg p-4 shadow">
        <h4 className="font-semibold mb-2 flex items-center gap-2">
          <FaBoxOpen /> Order Tracker
        </h4>
        <p className="text-sm text-gray-500">
          Track your recent orders and delivery status.
        </p>
      </div>
      <div className="bg-[var(--main-bg-color)] rounded-lg p-4 shadow">
        <h4 className="font-semibold mb-2 flex items-center gap-2">
          <FaGift /> Coupons
        </h4>
        <p className="text-sm text-gray-500">
          View and redeem available discount coupons.
        </p>
      </div>
      <div className="bg-[var(--main-bg-color)] rounded-lg p-4 shadow">
        <h4 className="font-semibold mb-2 flex items-center gap-2">
          <FaStar /> Points & Rewards
        </h4>
        <p className="text-sm text-gray-500">
          Check your loyalty points and rewards balance.
        </p>
      </div>
    </div>
  );
};

export default InfoCards;
