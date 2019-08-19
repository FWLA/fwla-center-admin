import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, required, SelectField, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';
import { JsonField } from './fields/JsonField';

const categories = [
    { id: 'OPERATION', name: 'Einsatz' },
    { id: 'INFO', name: 'Info' },
    { id: 'ARCHIVE', name: 'Archiv' },
];

const validateName = [required(), maxLength(64)];
const validateCategory = [required(), maxLength(64)];

export const MapLayerList = (props) => (
    <List title="Kartenebenen" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <SelectField source="category" label="Kategorie" choices={categories} />
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
            <SelectInput source="category" label="Kategorie" choices={categories} validate={validateCategory} />
            <JsonField source="geoJson" label="GeoJSON" />
        </SimpleForm>
    </Create>
);

export const MapLayerEdit = (props) => (
    <Edit title="Kartenebene bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <SelectInput source="category" label="Kategorie" choices={categories} validate={validateCategory} />
            <JsonField source="geoJson" label="GeoJSON" />
        </SimpleForm>
    </Edit>
);
