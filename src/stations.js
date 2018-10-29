import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, Edit, DisabledInput } from 'react-admin';

export const StationList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="address.street" label="Street" />
            <TextField source="address.zip" label="ZIP-Code" />
            <TextField source="address.town" label="Town" />
            <TextField source="address.district" label="District" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const StationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="address.street" label="Street" />
            <TextInput source="address.zip" label="ZIP-Code" />
            <TextInput source="address.town" label="Town" />
            <TextInput source="address.district" label="District" />
        </SimpleForm>
    </Create>
);

export const StationEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="address.street" label="Street" />
            <TextInput source="address.zip" label="ZIP-Code" />
            <TextInput source="address.town" label="Town" />
            <TextInput source="address.district" label="District" />
        </SimpleForm>
    </Edit>
);
