const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('itinerary-form');
    const itineraryDisplay = document.getElementById('itinerary-display');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ destination, startDate, endDate })
        })
        .then(response => response.json())
        .then(data => {
            // Display the itinerary
            const itineraryHtml = `
                <h2>Your Itinerary for ${data.destination}</h2>
                <p>From: ${data.startDate}</p>
                <p>To: ${data.endDate}</p>
                <p>Weather: ${data.weather.weather[0].description}</p>
                <ul>
                    ${data.itinerary.map(day => `<li>${day.date}: ${day.activities.join(', ')}</li>`).join('')}
                </ul>
            `;
            itineraryDisplay.innerHTML = itineraryHtml;
        })
        .catch(error => {
            console.error('Error:', error);
            itineraryDisplay.innerHTML = `<p>Error generating itinerary</p>`;
        });
    });
});