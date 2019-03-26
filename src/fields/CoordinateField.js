import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import pure from 'recompose/pure';

const defaultCoordinateToString = ({ latitude, longitude }, { minimumFractionDigits, maximumFractionDigits }) => {
    return ''
        .concat(latitude.toLocaleString(undefined, {
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits
        }))
        .concat(', ')
        .concat(longitude.toLocaleString(undefined, {
            minimumFractionDigits: minimumFractionDigits,
            maximumFractionDigits: maximumFractionDigits
        }));
};

const defaultCreateLink = ({ latitude, longitude }) => {
    return 'https://www.google.com/maps/search/?api=1&query='
        .concat(latitude.toLocaleString('en', {
            minimumFractionDigits: 6
        }))
        .concat(',')
        .concat(longitude.toLocaleString('en', {
            minimumFractionDigits: 6
        }));
}

const CoordinateFieldComponent = ({ source, record = {}, className, mappingFunction, showLink, createLink, minimumFractionDigits, maximumFractionDigits }) => {
    const val = get(record, source);
    const span = <span className={className}>
        {
            mappingFunction(val, {
                minimumFractionDigits: minimumFractionDigits,
                maximumFractionDigits: maximumFractionDigits
            })
        }
    </span>;

    if (showLink) {
        return <a href={createLink(val)} target="_blank" rel="noopener noreferrer">{span}</a>;
    }
    return span;
};

CoordinateFieldComponent.propTypes = {
    addLabel: PropTypes.bool,
    className: PropTypes.string,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    mappingFunction: PropTypes.func.isRequired,
    showLink: PropTypes.bool,
    createLink: PropTypes.func,
    minimumFractionDigits: PropTypes.number.isRequired,
    maximumFractionDigits: PropTypes.number.isRequired,
};

const PureTextField = pure(CoordinateFieldComponent);

PureTextField.defaultProps = {
    addLabel: true,
    mappingFunction: defaultCoordinateToString,
    showLink: false,
    createLink: defaultCreateLink,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
};

export const CoordinateField = PureTextField;
