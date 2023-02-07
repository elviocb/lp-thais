export const createWhatsAppLink = (phone = "", message = "") =>
  encodeURI(`https://wa.me/${phone}?text=${message}`);
