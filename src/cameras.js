import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, required, SimpleForm, TextField, TextInput, UrlField } from 'react-admin';

const validateName = [required(), maxLength(128)];
const validateUri = [required(), maxLength(1024)];

export const CameraList = (props) => (
    <List title="Kameras" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <UrlField source="uri" label="URI" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const CameraCreate = (props) => (
    <Create title="Kramera erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="uri" label="URI" validate={validateUri} />
        </SimpleForm>
    </Create>
);

export const CameraEdit = (props) => (
    <Edit title="Kamera bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="uri" label="URI" validate={validateUri} />
        </SimpleForm>
    </Edit>
);
