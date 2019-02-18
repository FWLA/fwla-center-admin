import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, NumberField, NumberInput, SimpleForm, TextField, TextInput } from 'react-admin';

export const StationList = (props) => (
    <List title="Standorte" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="location.address.street" label="Straße" />
            <TextField source="location.address.zip" label="PLZ" />
            <TextField source="location.address.town" label="Ort" />
            <TextField source="location.address.district" label="Ortsteil" />
            <NumberField source="location.coordinate.latitude" label="Breitengrad" />
            <NumberField source="location.coordinate.longitude" label="Längengrad" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const StationCreate = (props) => (
    <Create title="Standort erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="location.address.street" label="Straße" />
            <TextInput source="location.address.zip" label="PLZ" />
            <TextInput source="location.address.town" label="Ort" />
            <TextInput source="location.address.district" label="Ortsteil" />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" />
        </SimpleForm>
    </Create>
);

export const StationEdit = (props) => (
    <Edit title="Standort bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="location.address.street" label="Straße" />
            <TextInput source="location.address.zip" label="PLZ" />
            <TextInput source="location.address.town" label="Ort" />
            <TextInput source="location.address.district" label="Ortsteil" />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" />
        </SimpleForm>
    </Edit>
);
