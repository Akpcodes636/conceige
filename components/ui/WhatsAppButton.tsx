const WHATSAPP_NUMBER = "353870033223";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0px_8px_24px_0px_#00000033] transition-transform duration-300 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="#FFFFFF"
        aria-hidden="true"
      >
        <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.38.7 4.6 1.9 6.46L4 29l7.73-1.86a11.94 11.94 0 0 0 4.28.79h.01c6.63 0 12.01-5.38 12.01-12.02C28.02 8.38 22.64 3 16.01 3zm7.03 17.16c-.3.83-1.7 1.58-2.35 1.68-.6.09-1.36.13-2.19-.14-.5-.16-1.15-.37-1.98-.72-3.5-1.51-5.78-5.02-5.96-5.25-.17-.24-1.43-1.9-1.43-3.62 0-1.72.9-2.57 1.22-2.92.32-.35.7-.44.93-.44.23 0 .47 0 .67.01.21.01.5-.08.79.6.3.71.99 2.44 1.08 2.62.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.72.21.35.94 1.55 2.02 2.51 1.39 1.24 2.56 1.62 2.91 1.8.35.18.55.15.76-.09.21-.24.9-1.05 1.14-1.41.24-.35.47-.29.79-.18.32.12 2.03.96 2.38 1.13.35.18.58.26.67.41.09.15.09.86-.21 1.69z" />
      </svg>
    </a>
  );
}
