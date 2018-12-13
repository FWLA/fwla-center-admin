import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, EditButton, DeleteButton, Create, SimpleForm, TextInput, ReferenceInput, BooleanInput, SelectInput, Edit, DisabledInput } from 'react-admin';

export const ActiveResourceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="radio" label="Radio" />
            <ReferenceField source="stationId" reference="stations" label="Station">
                <TextField source="name" />
            </ReferenceField>
            <BooleanField source="inService" label="In Service" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const ActiveResourceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="radio" label="Radio" />
            <ReferenceInput label="Station" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <BooleanInput source="inService" label="In Service" />
        </SimpleForm>
    </Create>
);

export const ActiveResourceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Name" />
            <TextInput source="radio" label="Radio" />
            <ReferenceInput label="Station" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <BooleanInput source="inService" label="In Service" />
        </SimpleForm>
    </Edit>
);
