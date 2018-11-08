import React from 'react';
import { List, Datagrid, TextField, SelectField, EditButton, DeleteButton, Create, SimpleForm, TextInput, SelectInput, Edit, DisabledInput } from 'react-admin';

const operationTypes = [
    { id: 'FIRE', name: 'Fire' },
    { id: 'TECHNICAL_RESCUE', name: 'Technical Rescue' },
];

export const OperationKeysList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="key" label="Key" />
            <SelectField source="type" label="Type" choices={operationTypes} />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const OperationKeysCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="key" label="Key" />
            <SelectInput source="type" label="Type" choices={operationTypes} />
        </SimpleForm>
    </Create>
);

export const OperationKeysEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="key" label="Key" />
            <SelectInput source="type" label="Type" choices={operationTypes} />
        </SimpleForm>
    </Edit>
);
