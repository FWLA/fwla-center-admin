import React from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, ReferenceArrayField, SingleFieldList, ChipField, EditButton, DeleteButton, Create, SimpleForm, TextInput, ReferenceInput, ReferenceArrayInput, SelectArrayInput, SelectInput, BooleanInput, Edit, DisabledInput } from 'react-admin';

export const PassiveResourceList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="radio" label="Funkrufname" />
            <ReferenceField source="stationId" reference="stations" label="Standort">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceArrayField source="attachableToIds" reference="activeResources" label="Zugfahrzeuge">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <BooleanField source="inService" label="In Betrieb" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PassiveResourceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="radio" label="Funkrufname" />
            <ReferenceInput label="Standort" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <ReferenceArrayInput source="attachableToIds" reference="activeResources" label="Zugfahrzeuge">
                <SelectArrayInput optionText="name" optionValue="id" />
            </ReferenceArrayInput>
            <BooleanInput source="inService" label="In Betrieb" />
        </SimpleForm>
    </Create>
);

export const PassiveResourceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="radio" label="Funkrufname" />
            <ReferenceInput label="Standort" source="stationId" reference="stations">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <ReferenceArrayInput source="attachableToIds" reference="activeResources" label="Zugfahrzeuge">
                <SelectArrayInput optionText="name" optionValue="id" />
            </ReferenceArrayInput>
            <BooleanInput source="inService" label="In Betrieb" />
        </SimpleForm>
    </Edit>
);
