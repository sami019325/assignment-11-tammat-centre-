import React from 'react';

const ReviewForm = () => {

    const reviewCall = () => {
        const service = ''
        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => alert('Successful'))
    }

    return (
        <div>
            <form >
                user: Sami
            </form>
        </div>
    );
};

export default ReviewForm;