import React from 'react';
import { List, Datagrid, TextField, SelectField, EditButton, SimpleForm, TextInput, SelectInput, Edit, DisabledInput } from 'react-admin';

const sources = [
    { id: 'SUBJECT', name: 'Subject'},
    { id: 'BODY', name: 'Body' },
];

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
            <SelectInput source="source" label="Source" choices={sources} />
            <TextInput source="pattern" label="Pattern" />
        </SimpleForm>
    </Edit>
);
