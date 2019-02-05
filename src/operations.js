import React from 'react';
import { BooleanField, ChipField, Datagrid, DateField, List, NumberField, ReferenceArrayField, ReferenceField, Show, ShowButton, SingleFieldList, Tab, TabbedShowLayout, TextField } from 'react-admin';
import { SimpleArray } from './SimpleArray';

export const OperationsList = (props) => (
    <List title="Einsätze" {...props}>
        <Datagrid>
            <TextField source="id" label="ID" />
            <DateField source="time" showTime label="Alarmzeit" />
            <ReferenceField source="operatiomenKeyId" reference="operationKeys" allowEmpty label="Einsatzstichwort">
                <TextField source="key" />
            </ReferenceField>
            <TextField source="code" label="Code" />
            <TextField source="message" label="Meldung" />
            <TextField source="location.address.street" label="Straße" />
            <TextField source="location.address.town" label="Ort" />
            <TextField source="location.address.district" label="Ortsteil" />
            <ShowButton />
        </Datagrid>
    </List>
);

export const OperationsShow = (props) => (
    <Show {...props}>
        <TabbedShowLayout>
            <Tab label="Übersicht">
                <TextField source="id" label="ID" />
                <TextField source="code" label="Code" />
                <TextField source="message" label="Meldebild" />
                <ReferenceField source="operationKeyId" reference="operationKeys" allowEmpty label="Aufgelöstes Einsatzstichwort">
                    <TextField source="key" />
                </ReferenceField>
            </Tab>
            <Tab label="Einsatzstelle">
                <TextField source="place" label="Einsatzort" />
                <TextField source="object" label="Objekt" />
                <ReferenceField source="realEstateId" reference="realEstates" allowEmpty label="Aufgelöstes Objekt">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="location.address.town" label="Ort" />
                <TextField source="location.address.district" label="Ortsteil" />
                <TextField source="location.address.street" label="Straße" />
                <NumberField source="location.coordinate.latitude" options={{ maximumFractionDigits: 10 }} label="Breitengrad" />
                <NumberField source="location.coordinate.longitude" options={{ maximumFractionDigits: 10 }} label="Längengrad" />
            </Tab>
            <Tab label="Fahrzeuge">
                <SimpleArray source="resourceKeys" label="Einsatzmittel" />
                <ReferenceArrayField source="resources" reference="resources" label="Aufgelöste Fahrzeuge">
                    <SingleFieldList>
                        <ChipField source="name" />
                    </SingleFieldList>
                </ReferenceArrayField>
                <BooleanField source="ambulanceCalled" label="Rettungsdienst" />
            </Tab>
            <Tab label="Daten von Leitstelle">
                <TextField source="id" label="ID" />
                <TextField source="code" label="Code" />
                <TextField source="place" label="Einsatzort" />
                <TextField source="object" label="Objekt" />
                <TextField source="location.address.town" label="Ort" />
                <TextField source="location.address.district" label="Ortsteil" />
                <TextField source="location.address.street" label="Straße" />
                <NumberField source="location.coordinate.latitude" options={{ maximumFractionDigits: 10 }} label="Breitengrad" />
                <NumberField source="location.coordinate.longitude" options={{ maximumFractionDigits: 10 }} label="Längengrad" />
                <TextField source="notice" label="Bemerkung" />
                <TextField source="message" label="Meldebild" />
                <DateField source="time" showTime label="Alarmzeit" />
                <SimpleArray source="resourceKeys" label="Einsatzmittel" />
            </Tab>
        </TabbedShowLayout>
    </Show>
)
