import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>404 - Seite wurde nicht gefunden!</h1>
                <p>Wir waren nicht imstande die gewünschte Seite zu finden</p>
                <Link to="/" className="button button--link">Startseite</Link>
            </div>
        </div>
    );
};