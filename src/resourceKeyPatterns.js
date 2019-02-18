import React from 'react';
import { List, Datagrid, TextField, SelectField, EditButton, SimpleForm, TextInput, SelectInput, Create, Edit, DisabledInput } from 'react-admin';

const modes = [
    { id: 'INCLUDE', name: 'einschließen'},
    { id: 'EXCLUDE', name: 'ausschließen' },
];

export const ResourceKeyPatternsList = (props) => (
    <List title="Fahrzeug-Schlüssel Patterns" sort={{ field: 'pattern', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="pattern" label="Pattern" />
            <SelectField source="mode" label="Modus" choices={modes} />
            <EditButton />
        </Datagrid>
    </List>
);

export const ResourceKeyPatternsCreate = (props) => (
    <Create title="Fahrzeug-Schlüssel Pattern erstellen" {...props}>
        <SimpleForm>
            <TextInput source="pattern" label="Pattern" />
            <SelectInput source="mode" label="Modus" choices={modes} />
        </SimpleForm>
    </Create>
);

export const ResourceKeyPatternsEdit = (props) => (
    <Edit title="Fahrzeug-Schlüssel Pattern bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="pattern" label="Pattern" />
            <SelectInput source="mode" label="Modus" choices={modes} />
        </SimpleForm>
    </Edit>
);
