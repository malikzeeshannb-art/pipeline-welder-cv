// script.js - simple helpers for the CV page
// Phone, WhatsApp, email and map links already work from the HTML itself.
// This file handles: photo placeholder, download button, placeholder links, footer year.

(function () {
  "use strict";

  // 1) Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2) Photo placeholder: if profile.jpg is missing, show "ADD PHOTO" box
  var photo = document.getElementById("profilePhoto");
  var photoBox = document.getElementById("photoBox");
  if (photo && photoBox) {
  var showPlaceholder = function () { photoBox.classList.add("no-photo"); };
  photo.addEventListener("error", showPlaceholder);
  if (photo.complete && photo.naturalWidth === 0) showPlaceholder();
}

  // 3) Download my CV
  //    If Zeeshan_Hafeez_CV.pdf exists next to index.html -> it downloads.
  //    If not (file missing / opened offline) -> opens the print dialog,
  //    where you can choose "Save as PDF".
  var PDF_FILE = "Zeeshan_Hafeez_CV.pdf";
  var downloadButtons = document.querySelectorAll(".js-download");

  downloadButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      fetch(PDF_FILE, { method: "HEAD" })
        .then(function (response) {
          if (response.ok) {
            var link = document.createElement("a");
            link.href = PDF_FILE;
            link.download = PDF_FILE;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            window.print();
          }
        })
        .catch(function () {
          window.print();
        });
    });
  });

  // 4) Placeholder links (LinkedIn): warn instead of opening a wrong page
  var placeholders = document.querySelectorAll(".js-placeholder");
  placeholders.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        alert("LinkedIn URL is not added yet. Edit index.html and replace href=\"#\" with your full LinkedIn link.");
      }
    });
  });
})();
