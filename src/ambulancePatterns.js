import React from 'react';
import { List, Datagrid, TextField, SelectField, EditButton, SimpleForm, TextInput, SelectInput, Create, Edit, DisabledInput } from 'react-admin';

const modes = [
    { id: 'INCLUDE', name: 'einschließen'},
    { id: 'EXCLUDE', name: 'ausschließen' },
];

export const AmbulancePatternsList = (props) => (
    <List title="Rettungsdienst-Schlüssel Patterns" {...props}>
        <Datagrid>
            <TextField source="pattern" label="Pattern" />
            <SelectField source="mode" label="Modus" choices={modes} />
            <EditButton />
        </Datagrid>
    </List>
);

export const AmbulancePatternsCreate = (props) => (
    <Create title="Rettungsdienst-Schlüssel Pattern erstellen" {...props}>
        <SimpleForm>
            <TextInput source="pattern" label="Pattern" />
            <SelectInput source="mode" label="Modus" choices={modes} />
        </SimpleForm>
    </Create>
);

export const AmbulancePatternsEdit = (props) => (
    <Edit title="Rettungsdienst-Schlüssel Pattern bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="pattern" label="Pattern" />
            <SelectInput source="mode" label="Modus" choices={modes} />
        </SimpleForm>
    </Edit>
);
