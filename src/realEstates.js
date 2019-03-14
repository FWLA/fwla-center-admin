import React from 'react';
import { ArrayInput, ReferenceArrayField, SingleFieldList, ChipField, SelectArrayInput, ReferenceArrayInput, required, maxLength, number, Create, Datagrid, SelectField, SelectInput, DeleteButton, NumberInput, NumberField, DisabledInput, Edit, EditButton, List, LongTextInput, SimpleForm, SimpleFormIterator, TextField, TextInput } from 'react-admin';

const n = 128;
const folderAddresses = [];
for (var i = 0; i < n; i++) {
    folderAddresses.push({
        id: i,
        name: i + 1
    });
}

const validateName = [required(), maxLength(128)];
const validatePattern = [maxLength(512)];
const validateNumber = [maxLength(64)];
const validateLocationAddressStreet = [maxLength(128)];
const validateLocationAddressZip = [maxLength(16)];
const validateLocationAddressTown = [maxLength(128)];
const validateLocationAddressDistrict = [maxLength(128)];
const validateLocationCoordinateLatitude = [number()];
const validateLocationCoordinateLongitude = [number()];
const validateRealEstateTags = [];
const validateFolderAddress = [number()];
const validateInformation = [maxLength(2048)];
const validateLinkDescription = [required(), maxLength(256)];
const validateLinkLink = [required(), maxLength(512)];

export const RealEstateList = (props) => (
    <List title="Objekte" sort={{ field: 'name', order: 'ASC' }} {...props}>
        <Datagrid>
            <TextField source="name" label="Bezeichnung" />
            <TextField source="number" label="Objektnummer" />
            <TextField source="location.address.street" label="Straße" />
            <TextField source="location.address.zip" label="PLZ" />
            <TextField source="location.address.town" label="Ort" />
            <TextField source="location.address.district" label="Ortsteil" />
            <NumberField source="location.coordinate.latitude" label="Breitengrad" />
            <NumberField source="location.coordinate.longitude" label="Längengrad" />
            <ReferenceArrayField source="realEstateTags" reference="realEstateTags" label="Objektgruppen">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <SelectField source="folderAddress" choices={folderAddresses} label="Platz Ordner" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RealEstateCreate = (props) => (
    <Create title="Objekt erstellen" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="pattern" label="Pattern" validate={validatePattern} />
            <TextInput source="number" label="Objektnummer" validate={validateNumber} />
            <TextInput source="location.address.street" label="Straße" validate={validateLocationAddressStreet} />
            <TextInput source="location.address.zip" label="PLZ" validate={validateLocationAddressZip} />
            <TextInput source="location.address.town" label="Ort" validate={validateLocationAddressTown} />
            <TextInput source="location.address.district" label="Ortsteil" validate={validateLocationAddressDistrict} />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" validate={validateLocationCoordinateLatitude} />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" validate={validateLocationCoordinateLongitude} />
            <ReferenceArrayInput source="realEstateTags" reference="realEstateTags" label="Objektgruppen" validate={validateRealEstateTags}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <SelectInput source="folderAddress" choices={folderAddresses} allowEmpty label="Platz Ordner" validate={validateFolderAddress} />
            <LongTextInput source="information" label="Information" validate={validateInformation} />
            <ArrayInput source="links" label="Links">
                <SimpleFormIterator>
                    <TextInput source="description" label="Beschreibung" validate={validateLinkDescription} />
                    <TextInput source="link" label="Link" validate={validateLinkLink} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);

export const RealEstateEdit = (props) => (
    <Edit title="Objekt bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" label="Bezeichnung" validate={validateName} />
            <TextInput source="pattern" label="Pattern" validate={validatePattern} />
            <TextInput source="number" label="Objektnummer" validate={validateNumber} />
            <TextInput source="location.address.street" label="Straße" validate={validateLocationAddressStreet} />
            <TextInput source="location.address.zip" label="PLZ" validate={validateLocationAddressZip} />
            <TextInput source="location.address.town" label="Ort" validate={validateLocationAddressTown} />
            <TextInput source="location.address.district" label="Ortsteil" validate={validateLocationAddressDistrict} />
            <NumberInput source="location.coordinate.latitude" label="Breitengrad" validate={validateLocationCoordinateLatitude} />
            <NumberInput source="location.coordinate.longitude" label="Längengrad" validate={validateLocationCoordinateLongitude} />
            <ReferenceArrayInput source="realEstateTags" reference="realEstateTags" label="Objektgruppen" validate={validateRealEstateTags}>
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            <SelectInput source="folderAddress" choices={folderAddresses} allowEmpty label="Platz Ordner" validate={validateFolderAddress} />
            <LongTextInput source="information" label="Information" validate={validateInformation} />
            <ArrayInput source="links" label="Links">
                <SimpleFormIterator>
                    <TextInput source="description" label="Beschreibung" validate={validateLinkDescription} />
                    <TextInput source="link" label="Link" validate={validateLinkLink} />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
