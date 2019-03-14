import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, required, SimpleForm, TextField, TextInput } from 'react-admin';

const validateName = [required(), maxLength(128)];

export const RealEstateTagList = (props) => (
    <List title="Objektgruppen" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RealEstateTagCreate = (props) => (
    <Create title="Objektgruppe erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
        </SimpleForm>
    </Create>
);

export const RealEstateTagEdit = (props) => (
    <Edit title="Objektgruppe bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
        </SimpleForm>
    </Edit>
);
