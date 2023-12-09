
document.getElementById('searchImage').addEventListener('submit', async (ev) => {
    ev.preventDefault();

    let searchInput = document.getElementById('searchInput').value;
    if (!searchInput) {
        alert('Please enter a search keyword.');
        return;
    }

    let unsplashApiKey = '5i6i-fLjp8oMUnLCr5OfAKGnA8ob32uu9aQPqxVVqMM';
    let unsplashEndpoint = `https://api.unsplash.com/search/photos?query=${searchInput}&client_id=${unsplashApiKey}`;

    try {
        // Fetch image data from Unsplash
        let response = await fetch(unsplashEndpoint);
        let data = await response.json();

        let imageUrls = data.results.map(result => result.urls.regular);

    
        displayImages(imageUrls);
    } catch (error) {
        
        console.error('Error fetching images:', error);
    }
});

function displayImages(imageUrls) {
    let imageContainer = document.getElementById('imageContainer');
    
    // Clear existing images
    imageContainer.innerHTML = '';

    // Loop through image URLs and create <img> elements
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Unsplash Image';
        img.style.width = '400px'; // Set your preferred image size
        img.style.margin = '5px'; // Set margin between images
        imageContainer.appendChild(img);
    });
}
