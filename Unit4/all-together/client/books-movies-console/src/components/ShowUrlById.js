import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ShowUrlById() {
  const { id } = useParams();
  const [doc, setDoc] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`/url/${id}`)
      .then(res => setDoc(res.data))
      .catch(err => console.error('Error getting url doc:', err));
  }, [id]);

  if (!doc) return <p>Loading…</p>;

  const { url, enrichedData } = doc;

  return (
    <div>
      <Link className="sublink" to="/show-url">Back to URLs</Link>
      <h2>{url}</h2>
      <hr />
      <Link className="sublink" to={`/delete-url/${doc._id}`} state={doc}>
        Delete
      </Link>
      {enrichedData ? (
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(enrichedData, null, 2)}</pre>
      ) : (
        <p>No enrichment data stored.</p>
      )}
    </div>
  );
}

export default ShowUrlById;
