
import { useState } from "react";
import useFetch from "../useFetch";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import EventCard from "../components/EventCard";

function Home() {
  const { data, loading, error } = useFetch(
    "https://meetup-app-backend-theta.vercel.app/events",
    []
  );

  const [search, setSearch] = useState("");
  const [type, setType] = useState("Both");

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  let events = data;

  // Search
  if (search !== "") {
    events = events.filter((event) =>
      event.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filter
  if (type !== "Both") {
    events = events.filter((event) => event.type === type);
  }

  return (
    <div className="container">
      
      <h2 className="mb-4">Meetup Events</h2>

      <div className="row mb-4">
        <div className="col-md-8">
          <SearchBar onSearch={setSearch} />
        </div>

        <div className="col-md-4">
          <FilterDropdown type={type} setType={setType} />
        </div>
      </div>

      <div className="row g-4">
        {events.length === 0 && (
          <p className="text-muted">No events found.</p>
        )}

        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;

