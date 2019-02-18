import React from 'react';
import { List, Datagrid, TextField, SelectField, BooleanField, EditButton, DeleteButton, Create, SimpleForm, TextInput, SelectInput, BooleanInput, Edit, DisabledInput } from 'react-admin';

const operationTypes = [
    { id: 'FIRE', name: 'Brandeinsatz' },
    { id: 'TECHNICAL_RESCUE', name: 'Technische Hilfeleistung' },
];

export const OperationKeysList = (props) => (
    <List title="Einsatzstichworte" sort={{ field: 'key', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="key" label="Bezeichnung" />
            <TextField source="code" label="Schlüssel" />
            <SelectField source="type" label="Art" choices={operationTypes} />
            <BooleanField source="dangerToLife" label="Menschen in Gefahr" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const OperationKeysCreate = (props) => (
    <Create title="Einsatzstichwort erstellen" {...props}>
        <SimpleForm>
            <TextInput source="key" label="Bezeichnung" />
            <TextInput source="code" label="Schlüssel" />
            <SelectInput source="type" label="Art" choices={operationTypes} />
            <BooleanInput source="dangerToLife" label="Menschen in Gefahr" />
        </SimpleForm>
    </Create>
);

export const OperationKeysEdit = (props) => (
    <Edit title="Einsatzstichwort bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="key" label="Bezeichnung" />
            <TextInput source="code" label="Schlüssel" />
            <SelectInput source="type" label="Art" choices={operationTypes} />
            <BooleanInput source="dangerToLife" label="Menschen in Gefahr" />
        </SimpleForm>
    </Edit>
);
