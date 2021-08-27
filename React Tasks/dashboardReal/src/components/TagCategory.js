import React from 'react';
import { Label } from 'reactstrap';

function TagCategory( {name} ) {
    return (
        <React.Fragment>
            <Label className="categoryName px-3 py-1 me-2 fs-14">{name}</Label>
        </React.Fragment>
    )
}

export default TagCategory
