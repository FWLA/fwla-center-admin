import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, ReferenceArrayField, SingleFieldList, ChipField, EditButton, DeleteButton, Create, SimpleForm, TextInput, ReferenceInput, ReferenceArrayInput, SelectArrayInput, SelectInput, BooleanInput, Edit, DisabledInput } from 'react-admin';

export const PassiveResourceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="radio" label="Radio" />
            <ReferenceField source="stationId" reference="stations" label="Station">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceArrayField source="attachableToIds" reference="activeResources" label="Attachable to">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <BooleanField source="inService" label="In Service" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PassiveResourceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Name" />
            <TextInput source="radio" label="Radio" />
            <ReferenceInput label="Station" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <ReferenceArrayInput source="attachableToIds" reference="activeResources" label="Attachable to">
                <SelectArrayInput optionText="name" optionValue="id" />
            </ReferenceArrayInput>
            <BooleanInput source="inService" label="In Service" />
        </SimpleForm>
    </Create>
);

export const PassiveResourceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Name" />
            <TextInput source="radio" label="Radio" />
            <ReferenceInput label="Station" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <ReferenceArrayInput source="attachableToIds" reference="activeResources" label="Attachable to">
                <SelectArrayInput optionText="name" optionValue="id" />
            </ReferenceArrayInput>
            <BooleanInput source="inService" label="In Service" />
        </SimpleForm>
    </Edit>
);
