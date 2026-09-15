
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="col-md-4">
      <Link
        to={`/events/${event._id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card h-100 shadow-sm">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="card-img-top"
            style={{ height: "160px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{event.title}</h5>

            <p className="card-text">
              {event.date}
            </p>

            <span className="badge bg-success">
              {event.type}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;

