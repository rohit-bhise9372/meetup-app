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

      <div className="row g-4">
        {/* Left column: main content */}
        <div className="col-md-7">
          <span
            className={
              data.type === "Online"
                ? "badge bg-info mb-2"
                : "badge bg-success mb-2"
            }
          >
            {data.type}
          </span>

          <h1 className="mb-1">{data.title}</h1>

          {data.speaker && (
            <p className="text-muted mb-3">
              Hosted By: <strong>{data.speaker}</strong>
            </p>
          )}

          <img
            src={data.thumbnail}
            alt={data.title}
            className="img-fluid rounded mb-4"
            style={{ width: "100%", height: "320px", objectFit: "cover" }}
          />

          <h4 className="mb-2">Details</h4>
          <p className="text-muted">{data.description}</p>

          <h4 className="mt-4 mb-2">Additional Information</h4>
          <p className="mb-1">
            <strong>Dress Code:</strong> {data.dressCode}
          </p>
          <p className="mb-3">
            <strong>Age Restriction:</strong> {data.ageRestriction}
          </p>

          {data.tags && data.tags.length > 0 && (
            <>
              <h4 className="mb-2">Event Tags</h4>
              <div>
                {data.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge bg-danger me-2 mb-2 px-3 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right column: sidebar card */}
        <div className="col-md-5">
          <div className="card shadow-sm p-3 mb-3">
            <p className="mb-3">
              <img
                src="/time-icon.svg"
                width="16"
                height="16"
                alt="Time"
                className="me-1"
              />{" "}
              <strong>Time:</strong>
              <br />
              {data.date} · {data.time}
            </p>

            <p className="mb-3">
              <img
                src="/location-icon.svg"
                width="16"
                height="16"
                alt="Location"
                className="me-1"
              />{" "}
              <strong>{data.venue}</strong>
              <br />
              {data.address}
            </p>

            <p className="mb-0">
              <img
                src="/price-icon.svg"
                width="16"
                height="16"
                alt="Price"
                className="me-1"
              />{" "}
              {data.price && data.price > 0 ? <>₹{data.price}</> : "Free"}
            </p>
          </div>

          {data.speaker && (
            <div className="mb-3">
              <h5 className="mb-2">Speaker</h5>
              <div className="card p-3">
                <strong>{data.speaker}</strong>
                {data.topic && (
                  <span className="text-muted">{data.topic}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;