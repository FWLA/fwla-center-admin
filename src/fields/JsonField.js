import formatHighlight from 'json-format-highlight';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import React from 'react';
import Collapsible from 'react-collapsible';
import pure from 'recompose/pure';

require('./JsonField.css');

const JsonFieldComponent = ({ source, record = {}, className }) => {
    const val = formatHighlight(get(record, source));
    return (
        <Collapsible trigger="Geo JSON">
            <pre className={className}>
                <code dangerouslySetInnerHTML={{ __html: val }}>
                </code>
            </pre>
        </Collapsible>
    );
}

JsonFieldComponent.propTypes = {
    addLabel: PropTypes.bool,
    className: PropTypes.string,
    elStyle: PropTypes.object,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired
};

const PureJsonField = pure(JsonFieldComponent);

PureJsonField.defaultProps = {
    addLabel: true
};

export const JsonField = PureJsonField;
