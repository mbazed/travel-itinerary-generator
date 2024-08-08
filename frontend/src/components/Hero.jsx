import GenerateButton from "./GenerateButton";

const Hero = () => {
    return(
        <section id="user-input" className="p-2 flex flex-col">
          <h2>Plan Your Trip</h2>
          <form id="itinerary-form" className="flex flex-col">
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" className="border-2 rounded-sm border-black w-1/12" required />
            <br></br>
            <label htmlFor="start-date">Start Date:</label>
            <input type="date" id="start-date" className="border-2 rounded-sm border-black w-1/12" required />
            <br></br>
            <label htmlFor="end-date">End Date:</label>
            <input type="date" id="end-date" className="border-2 rounded-sm border-black w-1/12" required />
            <br></br>
            <GenerateButton title="Generate Itinireray" />
          </form>
        </section>
    );
}

export default Hero;