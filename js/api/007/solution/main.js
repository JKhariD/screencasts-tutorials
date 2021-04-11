fetch('https://api.unsplash.com/photos/random/?client_id=rSko55lJSBL2xZ_H_dClgHcD5Lr1TTK-j9Zm0tV1JN8&count=9')
  .then(response => response.json())
  .then(images => {
    images.map((image, index) => {
      const altText = image.alt_description
      const imagePath = image.urls.thumb
      const isHorz = image.width/image.height > 1
      replaceImage(`image${index}`, imagePath, altText, isHorz);
    });

  })
  .catch(err => { throw err });

const replaceImage = (imageId, imagePath, altText, isHorz) => {
  const target = document.getElementById(imageId);
  const horzClass = isHorz ? target.classList.add('horz') : ""
  target.innerHTML = `
    <img src="${imagePath}" alt="${altText}" />
  `;
};