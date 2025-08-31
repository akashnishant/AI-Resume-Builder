function Button({ children, onClick, type = "button", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:pointer-events-none disabled:bg-gray-400 disabled:opacity-30"
    >
      {children}
    </button>
  );
}

export default Button;