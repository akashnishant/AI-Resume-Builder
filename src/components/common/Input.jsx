function Input({ label, value, onChange, placeholder }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-gray-300">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500"
      />
    </label>
  );
}

export default Input;