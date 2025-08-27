import { useState } from "react";
import { Copy } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text || "");
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {}
      }}
      className="inline-flex items-center gap-1 rounded-lg bg-gray-800 px-3 py-1.5 text-xs text-white hover:bg-gray-700"
      aria-label="Copy to clipboard"
    >
      <Copy className="h-3.5 w-3.5" /> {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default CopyBtn;