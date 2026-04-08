import { FaWhatsapp } from "react-icons/fa";

const WhatsappCommunity = () => {
  return (
    <a
      href="https://chat.whatsapp.com/FdVK23UsRlXDp0Yzu9n6sD"
      className="fixed bottom-5 right-5 z-[9999]
                 flex h-14 w-14 items-center justify-center
                 rounded-full bg-green-500 text-white
                 shadow-lg transition-transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      title="Join our WhatsApp Community"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappCommunity;