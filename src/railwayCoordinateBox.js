import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, number, NumberField, NumberInput, required, SimpleForm } from 'react-admin';

const validateULLat = [required(), number()];
const validateULLon = [required(), number()];
const validateLRLat = [required(), number()];
const validateLRLon = [required(), number()];

export const RailwayCoordinateBoxList = (props) => (
    <List title="Bahn-Ausschnitte" {...props}>
        <Datagrid>
            <NumberField source="upperLeft.latitude" label="oben-links Breitengrad" />
            <NumberField source="upperLeft.longitude" label="oben-links Längengrad" />
            <NumberField source="lowerRight.latitude" label="unten-rechts Breitengrad" />
            <NumberField source="lowerRight.longitude" label="unten-rechts Längengrad" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RailwayCoordinateBoxCreate = (props) => (
    <Create title="Bahn-Ausschnitt erstellen" {...props}>
        <SimpleForm>
            <NumberInput source="upperLeft.latitude" label="oben-links Breitengrad" validate={validateULLat} />
            <NumberInput source="upperLeft.longitude" label="oben-links Längengrad" validate={validateULLon} />
            <NumberInput source="lowerRight.latitude" label="unten-rechts Breitengrad" validate={validateLRLat} />
            <NumberInput source="lowerRight.longitude" label="unten-rechts Längengrad" validate={validateLRLon} />
        </SimpleForm>
    </Create>
);

export const RailwayCoordinateBoxEdit = (props) => (
    <Edit title="Bahn-Ausschnitt bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <NumberInput source="upperLeft.latitude" label="oben-links Breitengrad" validate={validateULLat} />
            <NumberInput source="upperLeft.longitude" label="oben-links Längengrad" validate={validateULLon} />
            <NumberInput source="lowerRight.latitude" label="unten-rechts Breitengrad" validate={validateLRLat} />
            <NumberInput source="lowerRight.longitude" label="unten-rechts Längengrad" validate={validateLRLon} />
        </SimpleForm>
    </Edit>
);
