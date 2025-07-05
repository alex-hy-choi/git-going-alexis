import React from 'react';
import { Link } from 'react-router-dom';

function UrlCard({ urlInfo }) {
  return (
    <div className="card">
      <h3>
        <Link className="mainlink" to={`/show-url/${urlInfo._id}`} replace>
          {urlInfo.url}
        </Link>
      </h3>
      {urlInfo.enrichedData && (
        <p>{urlInfo.enrichedData.full_name || urlInfo.enrichedData.headline}</p>
      )}
      <Link className="sublink" to={`/delete-url/${urlInfo._id}`} state={urlInfo}>
        Delete
      </Link>
    </div>
  );
}

export default UrlCard;
