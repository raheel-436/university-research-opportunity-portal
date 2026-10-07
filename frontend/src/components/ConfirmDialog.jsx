import { useEffect } from "react"
import { motion } from "motion/react"

const ConfirmDialog = ({
  title,
  message,
  confirmLabel = "Delete",
  loading = false,
  error = "",
  onConfirm,
  onCancel,
}) => {

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onCancel()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onCancel])

  return (
    <div
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      className="fixed inset-0 z-[70] grid place-items-center p-4"
    >
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onCancel}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative w-full max-w-md rounded-[20px] border border-[#26352f] bg-[#16211d] p-7 text-[#eaf1ed] shadow-2xl"
      >
        {/* Icon */}
        <div className="grid h-12 w-12 place-items-center rounded-full bg-red-500/10 text-red-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v5M14 11v5" />
          </svg>
        </div>

        <h3 id="confirm-title" className="mt-5 font-serif text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#9aaaa3]">
          {message}
        </p>

        {error && <p className="mt-4 text-sm text-red-300">{error}</p>}

        <div className="mt-7 flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 rounded-xl border border-[#26352f] px-5 py-3 font-semibold text-[#9aaaa3] transition hover:text-[#eaf1ed] disabled:opacity-60"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400 disabled:opacity-60"
          >
            {loading ? "Deleting..." : confirmLabel}
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ConfirmDialog
