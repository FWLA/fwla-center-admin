import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, number, NumberField, NumberInput, required, SimpleForm, TextField, TextInput } from 'react-admin';

const validateName = [required(), maxLength(64)];
const validateLocationAddressStreet = [maxLength(128)];
const validateLocationAddressZip = [maxLength(16)];
const validateLocationAddressTown = [maxLength(128)];
const validateLocationAddressDistrict = [maxLength(128)];
const validateLocationCoordinateLatitude = [number()];
const validateLocationCoordinateLongitude = [number()];

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
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="location.address.street" label="Straße" validate={validateLocationAddressStreet} />
            <TextInput source="location.address.zip" label="PLZ" validate={validateLocationAddressZip} />
            <TextInput source="location.address.town" label="Ort" validate={validateLocationAddressTown} />
            <TextInput source="location.address.district" label="Ortsteil" validate={validateLocationAddressDistrict} />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" validate={validateLocationCoordinateLatitude} />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" validate={validateLocationCoordinateLongitude} />
        </SimpleForm>
    </Create>
);

export const StationEdit = (props) => (
    <Edit title="Standort bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="location.address.street" label="Straße" validate={validateLocationAddressStreet} />
            <TextInput source="location.address.zip" label="PLZ" validate={validateLocationAddressZip} />
            <TextInput source="location.address.town" label="Ort" validate={validateLocationAddressTown} />
            <TextInput source="location.address.district" label="Ortsteil" validate={validateLocationAddressDistrict} />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" validate={validateLocationCoordinateLatitude} />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" validate={validateLocationCoordinateLongitude} />
        </SimpleForm>
    </Edit>
);
