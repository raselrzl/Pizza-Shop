import React from 'react'

export default function Success({success}) {
    return (
        <div className='danger'>
            <div class="alert alert-success" role="alert">
                {success}
            </div>
        </div>
    )
}
