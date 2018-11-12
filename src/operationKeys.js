import React from 'react';
import { List, Datagrid, TextField, SelectField, BooleanField, EditButton, DeleteButton, Create, SimpleForm, TextInput, SelectInput, BooleanInput, Edit, DisabledInput } from 'react-admin';

const operationTypes = [
    { id: 'FIRE', name: 'Fire' },
    { id: 'TECHNICAL_RESCUE', name: 'Technical Rescue' },
];

export const OperationKeysList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="key" label="Key" />
            <TextField source="code" label="Code" />
            <SelectField source="type" label="Type" choices={operationTypes} />
            <BooleanField source="dangerToLife" label="Danger to life" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const OperationKeysCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="key" label="Key" />
            <TextInput source="code" label="Code" />
            <SelectInput source="type" label="Type" choices={operationTypes} />
            <BooleanInput source="dangerToLife" label="Danger to life" />
        </SimpleForm>
    </Create>
);

export const OperationKeysEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="key" label="Key" />
            <TextInput source="code" label="Code" />
            <SelectInput source="type" label="Type" choices={operationTypes} />
            <BooleanInput source="dangerToLife" label="Danger to life" />
        </SimpleForm>
    </Edit>
);
