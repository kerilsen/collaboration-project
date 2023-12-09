const apiKey = 'f855e062782300ad36a1dc15d727ecff';
const title = 'Child_for_loan';
const tags = 'happy-82ay9J5';

const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${title}&tags=${tags}&format=json&nojsoncallback=1`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Handle the data (extract the photo information)
    const photo = data.photos.photo[0]; // Assuming you want the first photo

    // Construct the image URL
    const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

    // Display the image on your web page
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.appendChild(imgElement);
  })
  .catch(error => console.error('Error fetching data:', error));
