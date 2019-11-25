import React from 'react';
import { Create, Datagrid, DateField, DeleteButton, DisabledInput, Edit, EditButton, List, maxLength, SimpleForm, TextField, TextInput } from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';
import { CoordinateField } from './fields/CoordinateField';
import { CoordinateInput } from './inputs/CoordinateInput';

const validateRoadblock = (value) => {
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

const validateStartTime = [];
const validateEndTime = [];
const validateInformation = [maxLength(1024)];
const validateLocationAddressStreet = [maxLength(128)];
const validateLocationAddressZip = [maxLength(16)];
const validateLocationAddressTown = [maxLength(128)];
const validateLocationAddressDistrict = [maxLength(128)];
const validateLocationCoordinate = [];

export const RoadblockList = (props) => (
    <List title="Straßensperren" sort={{ field: 'startTime', order: 'ASC' }} {...props}>
        <Datagrid>
            <DateField source="startTime" label="Start-Zeit" showTime />
            <DateField source="endTime" label="End-Zeit" showTime />
            <TextField source="information" label="Informationen" />
            <TextField source="location.address.street" label="Straße" />
            <TextField source="location.address.town" label="Stadt" />
            <TextField source="location.address.district" label="Stadtteil" />
            <CoordinateField source="location.coordinate" label="Koordinaten" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RoadblockCreate = (props) => (
    <Create title="Straßensperre erstellen" {...props}>
        <SimpleForm validate={validateRoadblock}>
            <DateTimeInput source="startTime" label="Start-Zeit" validate={validateStartTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <DateTimeInput source="endTime" label="End-Zeit" validate={validateEndTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <TextInput source="information" label="Informationen" validate={validateInformation} />
            <TextInput source="location.address.street" label="Straße" validate={validateLocationAddressStreet} />
            <TextInput source="location.address.zip" label="PLZ" validate={validateLocationAddressZip} />
            <TextInput source="location.address.town" label="Ort" validate={validateLocationAddressTown} />
            <TextInput source="location.address.district" label="Ortsteil" validate={validateLocationAddressDistrict} />
            <CoordinateInput source="location.coordinate" label="Koordinate" validate={validateLocationCoordinate} />
        </SimpleForm>
    </Create>
);

export const RoadblockEdit = (props) => (
    <Edit title="Straßensperre bearbeiten" {...props}>
        <SimpleForm validate={validateRoadblock}>
            <DisabledInput source="id" label="ID" />
            <DateTimeInput source="startTime" label="Start-Zeit" validate={validateStartTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <DateTimeInput source="endTime" label="End-Zeit" validate={validateEndTime} options={{ format: 'dd.MM.yyyy, HH:mm:ss', ampm: false, clearable: true }} />
            <TextInput source="information" label="Informationen" validate={validateInformation} />
            <TextInput source="location.address.street" label="Straße" validate={validateLocationAddressStreet} />
            <TextInput source="location.address.zip" label="PLZ" validate={validateLocationAddressZip} />
            <TextInput source="location.address.town" label="Ort" validate={validateLocationAddressTown} />
            <TextInput source="location.address.district" label="Ortsteil" validate={validateLocationAddressDistrict} />
            <CoordinateInput source="location.coordinate" label="Koordinate" validate={validateLocationCoordinate} />
        </SimpleForm>
    </Edit>
);
