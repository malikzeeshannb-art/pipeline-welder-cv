// script.js - small helpers for the CV page
// Map, email and WhatsApp links already work from the HTML itself.
// This file handles: footer year, photo placeholder, Download my CV, contact popup.

(function () {
  "use strict";

  // 1) Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2) Photo placeholder: if the photo file is missing, show the "ADD PHOTO" box
  var photo = document.getElementById("profilePhoto");
  var photoBox = document.getElementById("photoBox");
  if (photo && photoBox) {
    var showPlaceholder = function () { photoBox.classList.add("no-photo"); };
    photo.addEventListener("error", showPlaceholder);
    if (photo.complete && photo.naturalWidth === 0) showPlaceholder();
  }

  // 3) Download my CV: downloads the A4 PDF (the same file on phone and laptop).
  //    It never prints the page, so phones never get the mobile layout in the PDF.
  var PDF_FILE = "Zeeshan_Hafeez_CV.pdf";
  document.querySelectorAll(".js-download").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      fetch(PDF_FILE, { method: "HEAD" })
        .then(function (response) {
          if (!response.ok) throw new Error("PDF missing");
          var link = document.createElement("a");
          link.href = PDF_FILE;
          link.download = PDF_FILE;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(function () {
          alert("The PDF is not available right now. Please contact me by WhatsApp or email.");
        });
    });
  });

  // 4) Contact popup: clicking the phone number offers "Chat on WhatsApp" or "Phone call".
  //    Any element with the attribute data-contact-chooser opens it.
  var chooser = document.getElementById("contactChooser");
  if (chooser) {
    var lastFocus = null;

    var openChooser = function (event) {
      event.preventDefault();
      lastFocus = document.activeElement;
      chooser.hidden = false;
      var firstOption = chooser.querySelector(".chooser-btn");
      if (firstOption) firstOption.focus();
    };

    var closeChooser = function () {
      chooser.hidden = true;
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    document.querySelectorAll("[data-contact-chooser]").forEach(function (el) {
      el.addEventListener("click", openChooser);
    });

    // close: X button, click on the dark background, Esc key, or after choosing an option
    chooser.addEventListener("click", function (event) {
      if (event.target === chooser || event.target.hasAttribute("data-chooser-close")) closeChooser();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !chooser.hidden) closeChooser();
    });
    chooser.querySelectorAll(".chooser-btn").forEach(function (option) {
      option.addEventListener("click", function () { setTimeout(closeChooser, 300); });
    });
  }
})();