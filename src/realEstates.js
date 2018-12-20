import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, LongTextInput, Edit, DisabledInput } from 'react-admin';

export const RealEstateList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="key" label="Schlüssel" />
            <TextField source="address.street" label="Straße" />
            <TextField source="address.zip" label="PLZ" />
            <TextField source="address.town" label="Ort" />
            <TextField source="address.district" label="Ortsteil" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RealEstateCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="key" label="Schlüssel" />
            <TextInput source="address.street" label="Straße" />
            <TextInput source="address.zip" label="PLZ" />
            <TextInput source="address.town" label="Ort" />
            <TextInput source="address.district" label="Ortsteil" />
            <LongTextInput source="information" label="Information" />
        </SimpleForm>
    </Create>
);

export const RealEstateEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="key" label="Schlüssel" />
            <TextInput source="address.street" label="Straße" />
            <TextInput source="address.zip" label="PLZ" />
            <TextInput source="address.town" label="Ort" />
            <TextInput source="address.district" label="Ortsteil" />
            <LongTextInput source="information" label="Information" />
        </SimpleForm>
    </Edit>
);
