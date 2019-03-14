import React from 'react';
import { Datagrid, DisabledInput, Edit, EditButton, List, maxLength, required, SelectField, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

const sources = [
    { id: 'SUBJECT', name: 'Subject'},
    { id: 'BODY', name: 'Body' },
];

const validateSource = [required()];
const validatePattern = [required(), maxLength(512)];

export const RegexPatternsList = (props) => (
    <List title="Regex Patterns" sort={{ field: 'id', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="id" label="Field" />
            <SelectField source="source" label="Source" choices={sources} />
            <TextField source="pattern" label="Pattern" />
            <EditButton />
        </Datagrid>
    </List>
);

export const RegexPatternsEdit = (props) => (
    <Edit title="Regex Pattern bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="Field" />
            <SelectInput source="source" label="Source" choices={sources} validate={validateSource} />
            <TextInput source="pattern" label="Pattern" validate={validatePattern} />
        </SimpleForm>
    </Edit>
);
