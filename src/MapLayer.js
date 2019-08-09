import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, required, SimpleForm, TextField, TextInput } from 'react-admin';
import { JsonField } from './fields/JsonField';

const validateName = [required(), maxLength(64)];

export const MapLayerList = (props) => (
    <List title="Kartenebenen" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <JsonField source="geoJson" label="Geo JSON" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const MapLayerCreate = (props) => (
    <Create title="Kartenebene erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <JsonField source="geoJson" label="GeoJSON" />
        </SimpleForm>
    </Create>
);

export const MapLayerEdit = (props) => (
    <Edit title="Kartenebene bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <JsonField source="geoJson" label="GeoJSON" />
        </SimpleForm>
    </Edit>
);
