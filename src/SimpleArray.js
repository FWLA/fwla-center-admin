import Chip from '@material-ui/core/Chip';
import { PropTypes } from 'prop-types';
import React from 'react';


function populateList(values) {
    return values.map((value) =>
        <Chip label={value} />
    );
}

export const SimpleArray = ({ source, record = {} }) =>
    <div class="simple-array-list">
        {
            populateList(record[source])
        }
    </div>;


SimpleArray.defaultProps = {
    addLabel: true,
    label: 'List'
};


SimpleArray.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string
};