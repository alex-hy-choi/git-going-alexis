import React from 'react';
import ShowAllBooks from './ShowAllBooks.js';
import ShowAllMovies from './ShowAllMovies.js';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <ShowAllBooks />
            </div>
            <div style={{ flex: 1 }}>
                <ShowAllMovies />
            </div>
        </div>
    )
}

export default HomePage;