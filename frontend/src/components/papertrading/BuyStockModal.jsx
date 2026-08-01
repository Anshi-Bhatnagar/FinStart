import { useState } from "react";


function BuyStockModal({ open, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    stock_symbol: "",
    company_name: "",
    sector: "",
    exchange: "",
    quantity: "",
    price: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log(formData);

  alert("Stock purchase simulated successfully!");

  setFormData({
    stock_symbol: "",
    company_name: "",
    sector: "",
    exchange: "",
    quantity: "",
    price: "",
  });

  onClose();
};

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#131A2A] rounded-2xl p-8 w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-6 text-white">
          Buy Stock
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="stock_symbol"
            placeholder="Stock Symbol"
            value={formData.stock_symbol}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1D263A] text-white outline-none"
            required
          />

          <input
            type="text"
            name="company_name"
            placeholder="Company Name"
            value={formData.company_name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1D263A] text-white outline-none"
            required
          />

          <input
            type="text"
            name="sector"
            placeholder="Sector"
            value={formData.sector}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1D263A] text-white outline-none"
            required
          />

          <input
            type="text"
            name="exchange"
            placeholder="Exchange"
            value={formData.exchange}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1D263A] text-white outline-none"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1D263A] text-white outline-none"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1D263A] text-white outline-none"
            required
          />

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-lg"
            >
              Buy Stock
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default BuyStockModal;