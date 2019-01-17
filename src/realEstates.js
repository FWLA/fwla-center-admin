import React from 'react';
import { ArrayInput, Create, Datagrid, DeleteButton, NumberInput, NumberField, DisabledInput, Edit, EditButton, List, LongTextInput, SimpleForm, SimpleFormIterator, TextField, TextInput } from 'react-admin';

export const RealEstateList = (props) => (
    <List title="Objekte" {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="pattern" label="Pattern" />
            <TextField source="location.address.street" label="Straße" />
            <TextField source="location.address.zip" label="PLZ" />
            <TextField source="location.address.town" label="Ort" />
            <TextField source="location.address.district" label="Ortsteil" />
            <NumberField source="location.coordinate.latitude" label="Breitengrad" />
            <NumberField source="location.coordinate.longitude" label="Längengrad" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RealEstateCreate = (props) => (
    <Create title="Objekt erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="pattern" label="Pattern" />
            <TextInput source="location.address.street" label="Straße" />
            <TextInput source="location.address.zip" label="PLZ" />
            <TextInput source="location.address.town" label="Ort" />
            <TextInput source="location.address.district" label="Ortsteil" />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" />
            <LongTextInput source="information" label="Information" />
            <ArrayInput source="links" label="Links">
                <SimpleFormIterator>
                    <TextInput label="Link" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export const RealEstateEdit = (props) => (
    <Edit title="Objekt bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" label="Bezeichnung" />
            <TextInput source="pattern" label="Pattern" />
            <TextInput source="location.address.street" label="Straße" />
            <TextInput source="location.address.zip" label="PLZ" />
            <TextInput source="location.address.town" label="Ort" />
            <TextInput source="location.address.district" label="Ortsteil" />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" />
            <LongTextInput source="information" label="Information" />
            <ArrayInput source="links" label="Links">
                <SimpleFormIterator>
                    <TextInput label="Link" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
