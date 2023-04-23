function generateQRCode() {
    var url = document.getElementById("url-input").value;
    var qr = new QRious({
      element: document.getElementById("qr-code"),
      value: url
    });
  }
  