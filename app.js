document.getElementById("rescue").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sendLocation, showError);
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });
  
  function sendLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    // Custom message with location link
    const message = `Emergency! Please help me. My location: https://www.google.com/maps?q=${latitude},${longitude}`;
    
    // WhatsApp number to send the message
    const phoneNumber = "9528061398";
    
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp with the message
    window.open(whatsappUrl, "_blank");
  }
  
  function showError(error) {
    alert("Unable to retrieve location. Please enable GPS.");
  }
  