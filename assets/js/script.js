
const title = "Child_for_loan";
//const tag = 'cat';
const tag = "hayward";

const secret = "377fda244be74a00";
const photo_id = "53383179271";

// const apiUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&secret=${secret}&user_id=${user_id}&format=json&nojsoncallback=1`;
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

initMap();

document.addEventListener("DOMContentLoaded", function() {
  const apiKey = 'f855e062782300ad36a1dc15d727ecff';
  const userId = "199652929@N05"; // Your Flickr user ID
  const photoContainer = document.getElementById('photo-container');

  // Flickr API endpoint for fetching recent photos
  const flickrEndpoint = `https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${apiKey}&user_id=${userId}&format=json&nojsoncallback=1`;

  // Fetch data from Flickr API
  fetch(flickrEndpoint)
      .then(response => response.json())
      .then(data => {
          // Extract photo information from the API response
          const photos = data.photos.photo;

          // Create HTML elements for each photo and append them to the container
          photos.forEach(photo => {
              const photoUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
              const imgElement = document.createElement('img');
              imgElement.src = photoUrl;
              imgElement.alt = photo.title;

              // You can customize this part to add more information or styling
              const photoDiv = document.createElement('div');
              photoDiv.appendChild(imgElement);
              photoContainer.appendChild(photoDiv);
          });
      })
      .catch(error => console.error('Error fetching data from Flickr API:', error));
});


/* fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data here
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });*/

/* fetch(apiUrl)
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
  .catch(error => console.error('Error fetching data:', error));*/
