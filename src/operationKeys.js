import React from 'react';
import { BooleanField, BooleanInput, Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, required, SelectField, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

const operationTypes = [
    { id: 'FIRE', name: 'Brandeinsatz' },
    { id: 'TECHNICAL_RESCUE', name: 'Technische Hilfeleistung' },
];

const validateKey = [required(), maxLength(32)];
const validateCode = [maxLength(64)];
const validateType = [required()];
const validateDangerToLife = [];

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
            <TextInput source="key" label="Bezeichnung" validate={validateKey} />
            <TextInput source="code" label="Schlüssel" validate={validateCode} />
            <SelectInput source="type" label="Art" choices={operationTypes} validate={validateType} />
            <BooleanInput source="dangerToLife" label="Menschen in Gefahr" validate={validateDangerToLife} />
        </SimpleForm>
    </Create>
);

export const OperationKeysEdit = (props) => (
    <Edit title="Einsatzstichwort bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="key" label="Bezeichnung" validate={validateKey} />
            <TextInput source="code" label="Schlüssel" validate={validateCode} />
            <SelectInput source="type" label="Art" choices={operationTypes} validate={validateType} />
            <BooleanInput source="dangerToLife" label="Menschen in Gefahr" validate={validateDangerToLife} />
        </SimpleForm>
    </Edit>
);
