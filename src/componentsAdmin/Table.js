import React from 'react'

function Table() {
    return (
        <div>
            <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td><button className='btn btn-secondary'>Delete</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Table
