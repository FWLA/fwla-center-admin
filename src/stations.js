import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, required, SimpleForm, TextField, TextInput } from 'react-admin';
import { CoordinateField } from './fields/CoordinateField';
import { CoordinateInput } from './inputs/CoordinateInput';

const validateName = [required(), maxLength(64)];
const validateLocationAddressStreet = [maxLength(128)];
const validateLocationAddressZip = [maxLength(16)];
const validateLocationAddressTown = [maxLength(128)];
const validateLocationAddressDistrict = [maxLength(128)];
const validateLocationCoordinate = [];

export const StationList = (props) => (
    <List title="Standorte" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="location.address.street" label="Straße" />
            <TextField source="location.address.zip" label="PLZ" />
            <TextField source="location.address.town" label="Ort" />
            <TextField source="location.address.district" label="Ortsteil" />
            <CoordinateField source="location.coordinate" label="Koordinaten" showLink={true} />
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
            <CoordinateInput source="location.coordinate" label="Koordinaten" validate={validateLocationCoordinate} />
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
            <CoordinateInput source="location.coordinate" label="Koordinaten" validate={validateLocationCoordinate} />
        </SimpleForm>
    </Edit>
);
