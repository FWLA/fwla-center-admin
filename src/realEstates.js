import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, LongTextInput, Edit, DisabledInput } from 'react-admin';

export const RealEstateList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="key" label="Key" />
            <TextField source="address.street" label="Street" />
            <TextField source="address.zip" label="ZIP-Code" />
            <TextField source="address.town" label="Town" />
            <TextField source="address.district" label="District" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RealEstateCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="key" label="Key" />
            <TextInput source="address.street" label="Street" />
            <TextInput source="address.zip" label="ZIP-Code" />
            <TextInput source="address.town" label="Town" />
            <TextInput source="address.district" label="District" />
            <LongTextInput source="information" label="Information" />
        </SimpleForm>
    </Create>
);

export const RealEstateEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="key" label="Key" />
            <TextInput source="address.street" label="Street" />
            <TextInput source="address.zip" label="ZIP-Code" />
            <TextInput source="address.town" label="Town" />
            <TextInput source="address.district" label="District" />
            <LongTextInput source="information" label="Information" />
        </SimpleForm>
    </Edit>
);
