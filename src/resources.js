import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, EditButton, DeleteButton, Create, SimpleForm, TextInput, ReferenceInput, BooleanInput, SelectInput, Edit, DisabledInput } from 'react-admin';

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
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="radio" label="Funkrufname" />
            <TextInput source="key" label="Schlüssel" />
            <ReferenceInput label="Standort" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <BooleanInput source="inService" label="In Betrieb" />
        </SimpleForm>
    </Create>
);

export const ResourceEdit = (props) => (
    <Edit title="Fahrzeug bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="radio" label="Funkrufname" />
            <TextInput source="key" label="Schlüssel" />
            <ReferenceInput label="Standort" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <BooleanInput source="inService" label="In Betrieb" />
        </SimpleForm>
    </Edit>
);
