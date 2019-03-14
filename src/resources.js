import React from 'react';
import { BooleanField, BooleanInput, Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, ReferenceField, ReferenceInput, required, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

const validateName = [required(), maxLength(128)];
const validateRadio = [maxLength(128)];
const validateKey = [maxLength(64)];
const validateStation = [required()];
const validateInService = [];

export const ResourceList = (props) => (
    <List title="Fahrzeuge" sort={{ field: 'radio', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="radio" label="Funkrufname" />
            <TextField source="key" label="Schlüssel" />
            <ReferenceField source="stationId" reference="stations" label="Standort">
                <TextField source="name" />
            </ReferenceField>
            <BooleanField source="inService" label="In Betrieb" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ResourceCreate = (props) => (
    <Create title="Fahrzeug erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="radio" label="Funkrufname" validate={validateRadio} />
            <TextInput source="key" label="Schlüssel" validate={validateKey} />
            <ReferenceInput label="Standort" source="stationId" reference="stations" validate={validateStation}>
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <BooleanInput source="inService" label="In Betrieb" validate={validateInService} />
        </SimpleForm>
    </Create>
);

export const ResourceEdit = (props) => (
    <Edit title="Fahrzeug bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="radio" label="Funkrufname" validate={validateRadio} />
            <TextInput source="key" label="Schlüssel" validate={validateKey} />
            <ReferenceInput label="Standort" source="stationId" reference="stations" validate={validateStation}>
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <BooleanInput source="inService" label="In Betrieb" validate={validateInService} />
        </SimpleForm>
    </Edit>
);
