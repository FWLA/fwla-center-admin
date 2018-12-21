import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, Edit, DisabledInput } from 'react-admin';

export const StationList = (props) => (
    <List title="Standorte" {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="address.street" label="Straße" />
            <TextField source="address.zip" label="PLZ" />
            <TextField source="address.town" label="Ort" />
            <TextField source="address.district" label="Ortsteil" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const StationCreate = (props) => (
    <Create title="Standort erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="address.street" label="Straße" />
            <TextInput source="address.zip" label="PLZ" />
            <TextInput source="address.town" label="Ort" />
            <TextInput source="address.district" label="Ortsteil" />
        </SimpleForm>
    </Create>
);

export const StationEdit = (props) => (
    <Edit title="Standort bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="address.street" label="Straße" />
            <TextInput source="address.zip" label="PLZ" />
            <TextInput source="address.town" label="Ort" />
            <TextInput source="address.district" label="Ortsteil" />
        </SimpleForm>
    </Edit>
);
