import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, required, SimpleForm } from 'react-admin';
import { CoordinateField } from './fields/CoordinateField';
import { CoordinateInput } from './inputs/CoordinateInput';
const validateUL = [required()];
const validateLR = [required()];

export const RailwayCoordinateBoxList = (props) => (
    <List title="Bahn-Ausschnitte" {...props}>
        <Datagrid>
            <CoordinateField source="upperLeft" label="oben-links" showLink="true" />
            <CoordinateField source="lowerRight" label="unten-rechts" showLink="true" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RailwayCoordinateBoxCreate = (props) => (
    <Create title="Bahn-Ausschnitt erstellen" {...props}>
        <SimpleForm>
            <CoordinateInput source="upperLeft" label="oben-links" validate={validateUL} />
            <CoordinateInput source="lowerRight" label="unten-rechts" validate={validateLR} />
        </SimpleForm>
    </Create>
);

export const RailwayCoordinateBoxEdit = (props) => (
    <Edit title="Bahn-Ausschnitt bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <CoordinateInput source="upperLeft" label="oben-links" validate={validateUL} />
            <CoordinateInput source="lowerRight" label="unten-rechts" validate={validateLR} />
        </SimpleForm>
    </Edit>
);
