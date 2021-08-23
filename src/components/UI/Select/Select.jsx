import React from 'react';

const Select = ({filter, setFilters, filters, filtersArray, filterField, className}) => {
    return (
        <select className={className} value={filter} onChange={(e) => setFilters({...filters, [filterField]: e.target.value})}>
            <option value="">Все</option>
            {filtersArray.map((filt, index) =>
                <option key={index} value={filt}>{ filt }</option>
            )}
        </select>
    );
};

export default Select;