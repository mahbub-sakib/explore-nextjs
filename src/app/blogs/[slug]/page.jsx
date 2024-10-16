import React from 'react';

const page = ({ params }) => {
    console.log(params);

    return (
        <div>
            <h5>{params.title}</h5>
            <h5>{params.description}</h5>
        </div>
    );
};

export default page;