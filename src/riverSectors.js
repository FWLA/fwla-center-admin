import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, minValue, number, NumberField, NumberInput, required, SelectField, SelectInput, SimpleForm } from 'react-admin';

const rivers = [
    { id: 'RHINE', name: 'Rhein'},
    { id: 'NECKAR', name: 'Neckar' },
];

const validateRiver = [required()];
const validateFrom = [required(), number(), minValue(0)];
const validateTo = [required(), number(), minValue(0)];
const validateInterval = [required(), number(), minValue(0)];

export const RiverSectorList = (props) => (
    <List title="Flussabschnitte" sort={{ field: 'river', order: 'ASC' }} {...props}>
        <Datagrid>
            <SelectField source="river" label="Fluss" choices={rivers} />
            <NumberField source="from" label="von" />
            <NumberField source="to" label="bis" />
            <NumberField source="interval" label="Interval" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const RiverSectorCreate = (props) => (
    <Create title="Flussabschnitt erstellen" {...props}>
        <SimpleForm>
            <SelectInput source="river" label="Fluss" choices={rivers} validate={validateRiver} />
            <NumberInput source="from" label="von" validate={validateFrom} />
            <NumberInput source="to" label="bis" validate={validateTo} />
            <NumberInput source="interval" label="Interval" validate={validateInterval} />
        </SimpleForm>
    </Create>
);

export const RiverSectorEdit = (props) => (
    <Edit title="Fahrzeug bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <SelectInput source="river" label="Fluss" choices={rivers} validate={validateRiver} />
            <NumberInput source="from" label="von" validate={validateFrom} />
            <NumberInput source="to" label="bis" validate={validateTo} />
            <NumberInput source="interval" label="Interval" validate={validateInterval} />
        </SimpleForm>
    </Edit>
);
