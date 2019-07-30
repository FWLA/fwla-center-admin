import DefaultIcon from '@material-ui/icons/ViewList';
import React from 'react';
import { getResources, MenuItemLink } from 'react-admin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

require('./Menu.css');

const createMenuItem = (resource, onMenuClick) => (
    <MenuItemLink
        key={resource.name}
        to={`/${resource.name}`}
        primaryText={resource.options.label}
        leftIcon={
            resource.icon ? <resource.icon /> : <DefaultIcon />
        }
        onClick={onMenuClick} />
);

const createCategoryHeader = (name) => (
    <h2 className="category-header">{name}</h2>
);

const Menu = ({ resources, onMenuClick }) => {
    const resourcesMap = {};
    resources.forEach(resource => {
        resourcesMap[resource.name] = resource;
    });
    return <div>
        {createCategoryHeader('Allgemein')}
        {createMenuItem(resourcesMap.operations, onMenuClick)}
        {createMenuItem(resourcesMap.displayEvents, onMenuClick)}
        {createMenuItem(resourcesMap.resources, onMenuClick)}
        {createMenuItem(resourcesMap.realEstates, onMenuClick)}

        {createCategoryHeader('Geodaten')}
        {createMenuItem(resourcesMap.mapLayers, onMenuClick)}
        {createMenuItem(resourcesMap.riverSectors, onMenuClick)}
        {createMenuItem(resourcesMap.railwayCoordinateBoxes, onMenuClick)}

        {createCategoryHeader('Basisdaten')}
        {createMenuItem(resourcesMap.regexPatterns, onMenuClick)}
        {createMenuItem(resourcesMap.stations, onMenuClick)}
        {createMenuItem(resourcesMap.operationKeys, onMenuClick)}
        {createMenuItem(resourcesMap.resourceKeyPatterns, onMenuClick)}
        {createMenuItem(resourcesMap.ambulancePatterns, onMenuClick)}
        {createMenuItem(resourcesMap.realEstateTags, onMenuClick)}
        {createMenuItem(resourcesMap.cameras, onMenuClick)}

        {createCategoryHeader('Analyse')}
        {createMenuItem(resourcesMap.eventLogs, onMenuClick)}
    </div>;
};

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(Menu));
