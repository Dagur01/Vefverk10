const faBrandaraButton = document.getElementById('faBrandara');
const brandari = document.getElementById('brandari');
const hreinsaButton = document.getElementById('hreinsa');

async function fetchJoke() {
  const url = 'https://api.api-ninjas.com/v1/dadjokes';
  const options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'VLEACs0HdRYWWjzeDX0PSw==P0YKTwIVjqqq2hKf' }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data && data.length > 0) {
      brandari.textContent = data[0].joke;
    } else {
      brandari.textContent = "No jokes found at the moment.";
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
    brandari.textContent = "An error occurred. Please try again later.";
  }
}

faBrandaraButton.addEventListener('click', () => {
  brandari.textContent = "Þú sérð eftir þessu...";
  fetchJoke();
});

hreinsaButton.addEventListener('click', () =>{
  brandari.textContent = "";
});
