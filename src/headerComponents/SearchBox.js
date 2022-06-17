import React from 'react'

export default function SearchBox() {
    return (
        <div>
            <form className="d-flex">
                        <input className="form-control form-lg" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">
                        <i className="bi bi-search main-navbar-fs fs-5"></i>
                        </button>
                    </form>
        </div>
    )
}
