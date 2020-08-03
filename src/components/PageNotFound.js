import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
    return (
        <div className="bb-page-not-found">
            <h2 className="bb-page-not-found__title">
                <span className="bb-page-not-found__number">404</span>
                <span className="bb-page-not-found__text">page not found</span>
            </h2>
            <Link className="bb-link" to="/">Go Home</Link>
        </div>
    )
}

export default PageNotFound
