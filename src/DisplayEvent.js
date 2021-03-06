import RichTextInput from 'ra-input-rich-text';
import React from 'react';
import { BooleanField, BooleanInput, Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit, EditButton, List, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField } from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';

const validateDisplayEvent = (value) => {
    const errors = {};

    if (value.startTime && value.endTime) {
        const startTime = new Date(value.startTime);
        const endTime = new Date(value.endTime);
        if (startTime > endTime) {
            errors.startTime = ['Start time must be before end time.'];
            errors.endTime = ['Start time must be before end time.'];
        }
    }

    return errors;
};

const validateStation = [];
const validateStartTime = [];
const validateEndTime = [];
const validateText = [];
const validateShowOperation = [];

export const DisplayEventList = (props) => (
    <List title="Anzeige" sort={{ field: 'startTime', order: 'ASC' }} {...props}>
        <Datagrid>
            <ReferenceField source="stationId" reference="stations" label="Standort">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="startTime" label="Start-Zeit" showTime />
            <DateField source="endTime" label="End-Zeit" showTime />
            <BooleanField source="showOperation" label="Einsatz anzeigen" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const DisplayEventCreate = (props) => (
    <Create title="Anzeige erstellen" {...props}>
        <SimpleForm validate={validateDisplayEvent}>
            <ReferenceInput label="Standort" source="stationId" reference="stations" validate={validateStation}>
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <DateTimeInput source="startTime" label="Start-Zeit" validate={validateStartTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <DateTimeInput source="endTime" label="End-Zeit" validate={validateEndTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <RichTextInput source="text" label="Text" validate={validateText} />
            <BooleanInput source="showOperation" label="Einsatz anzeigen" validate={validateShowOperation} />
        </SimpleForm>
    </Create>
);

export const DisplayEventEdit = (props) => (
    <Edit title="Anzeige bearbeiten" {...props}>
        <SimpleForm validate={validateDisplayEvent}>
            <DisabledInput source="id" label="ID" />
            <ReferenceInput label="Standort" source="stationId" reference="stations" validate={validateStation}>
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
            <DateTimeInput source="startTime" label="Start-Zeit" validate={validateStartTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <DateTimeInput source="endTime" label="End-Zeit" validate={validateEndTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <RichTextInput source="text" label="Text" validate={validateText} />
            <BooleanInput source="showOperation" label="Einsatz anzeigen" validate={validateShowOperation} />
        </SimpleForm>
    </Edit>
);
