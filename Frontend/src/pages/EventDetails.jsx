
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";

function EventDetails() {
  const { eventId } = useParams();

  const { data, loading, error } = useFetch(
    `https://meetup-app-backend-theta.vercel.app/events/${eventId}`,
    null
  );

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  if (error) return <h2 className="text-center mt-5">{error}</h2>;

  if (!data) return <h2 className="text-center mt-5">Event not found</h2>;

  return (
    <div className="container py-5">

      <Link to="/" className="btn btn-outline-secondary mb-4">
        ← Back to Events
      </Link>

      <div className="card shadow">

        <img
          src={data.thumbnail}
          alt={data.title}
          className="card-img-top"
          style={{
            height: "350px",
            objectFit: "cover",
          }}
        />

        <div className="card-body p-4">

          <span
            className={
              data.type === "Online"
                ? "badge bg-info mb-3"
                : "badge bg-success mb-3"
            }
          >
            {data.type}
          </span>

          <h1 className="card-title mb-3">
            {data.title}
          </h1>

          <p className="text-muted">
            📅 <strong>Date:</strong> {data.date}
          </p>

          <p className="text-muted">
            📍 <strong>Location:</strong> {data.address}
          </p>

          <hr />

          <h4>About this event</h4>

          <p className="text-muted">
            {data.description}
          </p>

          {data.tags && (
            <div className="mt-4">
              <h5>Tags</h5>

              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-secondary me-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4">
            <button className="btn btn-primary">
              Join Event
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EventDetails;

