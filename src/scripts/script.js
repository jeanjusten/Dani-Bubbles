document.addEventListener("DOMContentLoaded", () => {
    // Whatsapp Number
    const whatsappNumber = "+55 (42) xxxxx-xxxx";
    // Formated Number
    const formattedWhatsappNumber = whatsappNumber.replace(/\D/g, "");
    // Message
    const message = "Olá! Gostaria de pedir um Bubble Drink.";
    // Whatsapp API number
    const whatsappApi = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(message)}`;
    // CNPJ Number
    const cnpjNumber = "50.349.278/0001-47";
    // CNPJ Text
    const cnpj = `CNPJ<br>${cnpjNumber}`;
    // Instagram
    const instagramUsername = "dani_bubblesdrink"
    // Instagram Link
    const instagramLink = `https://www.instagram.com/${instagramUsername}/`;
    

    // WhatsApp Link API Replace Default Message
    [
        "contact-whatsapp-hero",
        "contact-whatsapp-about",
        "contact-whatsapp-svg",
        "contact-whatsapp-footer"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = whatsappApi;
            // Prevents empty clicks on Whatsapp Links
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(whatsappApi, "_blank");
            });
        }
    });

    // Instagram Replace
    [
        "contact-instagram-svg",
        "contact-instagram-footer"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = instagramLink;
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(instagramLink, "_blank");
            });
        }
    });

    // CNPJ Replace
    document.getElementById("cnpj").innerHTML = cnpj;
});
