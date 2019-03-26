import React, { createRef } from 'react';
import { addField, FieldTitle } from 'ra-core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet'
import { PropTypes } from 'prop-types';

require('leaflet/dist/leaflet.css');
require('./CoordinateInput.css');

const markerIcon = new L.Icon({
    iconUrl: 'images/marker-icon.png',
    iconRetinaUrl: 'images/marker-icon-2x.png',
    iconAnchor: [12, 41],
    iconSize: [25, 41],
    shadowUrl: 'images/marker-shadow.png',
    shadowSize: [41, 41],
});

function fromLeafletLatLng(latLng) {
    return {
        latitude: latLng.lat,
        longitude: latLng.lng,
    };
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

    render() {
        const {
            label,
            source,
            className,
            input,
            resource,
            isRequired,
        } = this.props;

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
                        <Marker ref={this.refmarker} position={position} icon={markerIcon} draggable={true} onDragend={this.updatePosition} />
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
