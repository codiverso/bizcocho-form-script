window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const imageURL = urlParams.get("imageURL");
  if (imageURL) {
    const image = document.getElementById("preview-image");
    if (image) {
      image.src = imageURL;
    }
  }
};
