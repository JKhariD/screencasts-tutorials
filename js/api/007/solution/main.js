fetch("https://api.unsplash.com/photos/random/?client_id=rSko55lJSBL2xZ_H_dClgHcD5Lr1TTK-j9Zm0tV1JN8&count=9")
  .then(res => res.json())
  .then((images) => {
    images.map((image, index) => {
      const isHorizontal = image.width/image.height >= 1;
      const altText = image.alt_description;
      replaceImage(`image${index}`, image.urls.small, isHorizontal, altText)
    })
  })
  .catch(err => { throw err });



const replaceImage = (imageId, imagePath, isHorizontal, altText) => {
  const target = document.getElementById(imageId);
  const vertClass = !isHorizontal ? target.classList.add("vert") : "";
  target.innerHTML = `
    <img src="${imagePath}" alt="${altText}"/>
  `;
};