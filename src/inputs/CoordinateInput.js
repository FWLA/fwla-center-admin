import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { PropTypes } from 'prop-types';
import { addField, FieldTitle } from 'ra-core';
import React, { createRef } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

require('./CoordinateInput.css');

function fromLeafletLatLng(latLng) {
    return {
        latitude: latLng.lat,
        longitude: latLng.lng,
    };
};

function toLeafletLatLng(coordinate) {
    return [coordinate.latitude, coordinate.longitude];
};

class CoordinateInputComponent extends React.Component {

    state = {
        zoom: 14,
    };
    refmarker = createRef();
    refmap = createRef();

    handleChange = (coordinate) => {
        this.props.input.onChange(coordinate);
        this.forceUpdate();
    };

    updatePosition = () => {
        const marker = this.refmarker.current;
        if (marker != null) {
            this.handleChange(fromLeafletLatLng(marker.leafletElement.getLatLng()));
        }
    }

    onZoomEnd = () => {
        const map = this.refmap.current;
        if (map != null) {
            this.setState({
                zoom: map.leafletElement.getZoom()
            });
        }
    }

    setPosition = (coordinate) => {
        const latLng = toLeafletLatLng(coordinate);
        const map = this.refmap.current;
        if (map != null) {
            map.leafletElement.panTo(latLng);
        }
        const marker = this.refmarker.current;
        if (marker != null) {
            marker.leafletElement.setLatLng(latLng);
        }
    }

    render() {
        const {
            label,
            source,
            className,
            input,
            resource,
            isRequired,
        } = this.props;

        if (!input.value) {
            fetch('/api/v1/settings/home').then(response => {
                response.json().then(json => {
                    this.setPosition(json);
                });
            }, (err) => {
                console.log(err);
            });
        }

        const position = input.value ? [input.value.latitude, input.value.longitude] : [0, 0];

        return (
            <FormControl
                fullWidth
                margin="normal"
                className={className}
            >
                <InputLabel htmlFor={source} shrink>
                    <FieldTitle
                        label={label}
                        source={source}
                        resource={resource}
                        isRequired={isRequired}
                    />
                </InputLabel>
                <div className="coordinate-input-container">
                    <Map ref={this.refmap} center={position} zoom={this.state.zoom} onZoomEnd={this.onZoomEnd}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker ref={this.refmarker} position={position} draggable={true} onDragend={this.updatePosition} />
                    </Map>
                </div>
            </FormControl>
        );
    }
}

CoordinateInputComponent.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    source: PropTypes.string.isRequired,
    input: PropTypes.object,
    resource: PropTypes.string.isRequired,
};

CoordinateInputComponent.defaultProps = {
    label: 'Coordinate'
};

export const CoordinateInput = addField(CoordinateInputComponent);
