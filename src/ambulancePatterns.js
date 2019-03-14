import React from 'react';
import { Create, Datagrid, DisabledInput, Edit, EditButton, List, maxLength, required, SelectField, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

const modes = [
    { id: 'INCLUDE', name: 'einschließen'},
    { id: 'EXCLUDE', name: 'ausschließen' },
];

const validatePattern = [required(), maxLength(512)];
const validateMode = [required()];

export const AmbulancePatternsList = (props) => (
    <List title="Rettungsdienst-Schlüssel Patterns" sort={{ field: 'pattern', order: 'ASC' }} {...props}>
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
            <TextInput source="pattern" label="Pattern" validate={validatePattern} />
            <SelectInput source="mode" label="Modus" choices={modes} validate={validateMode} />
        </SimpleForm>
    </Create>
);

export const AmbulancePatternsEdit = (props) => (
    <Edit title="Rettungsdienst-Schlüssel Pattern bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="pattern" label="Pattern" validate={validatePattern} />
            <SelectInput source="mode" label="Modus" choices={modes} validate={validateMode} />
        </SimpleForm>
    </Edit>
);
