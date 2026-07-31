function Row({ title, value }) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-3">
      <p className="text-gray-400">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

export default Row;