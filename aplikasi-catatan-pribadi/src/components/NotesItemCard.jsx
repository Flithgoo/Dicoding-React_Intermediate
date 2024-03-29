import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';

function NotesItemCard({ id, title, body, createdAt }) {
  const navigate = useNavigate();
  return (
    <div className="col-md-6 mb-4 d-flex card-hover" onClick={() => { navigate(`/detail/${id}`) }}>
      <div className="card align-items-stretch w-100">
        <div className="card-header"><h5 className="card-title"><b>{title}</b></h5>
          <h6 className="card-subtitle text-muted">{new Date(createdAt).toLocaleDateString('id-ID', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
          </h6>
        </div>
        <div className="card-body">
          <p className="card-text">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

NotesItemCard.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  body: string.isRequired,
  createdAt: string.isRequired
}

export default NotesItemCard;