function Progress({ value }) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-800">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export default Progress;