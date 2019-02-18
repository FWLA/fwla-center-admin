import React from 'react';
import { Create, Datagrid, DeleteButton, DisabledInput, Edit, EditButton, List, NumberField, NumberInput, SelectField, SelectInput, SimpleForm } from 'react-admin';

const rivers = [
    { id: 'RHINE', name: 'Rhein'},
    { id: 'NECKAR', name: 'Neckar' },
];

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
            <SelectInput source="river" label="Fluss" choices={rivers} />
            <NumberInput source="from" label="von" />
            <NumberInput source="to" label="bis" />
            <NumberInput source="interval" label="Interval" />
        </SimpleForm>
    </Create>
);

export const RiverSectorEdit = (props) => (
    <Edit title="Fahrzeug bearbeiten" {...props}>
        <SimpleForm>
            <DisabledInput source="id" label="ID" />
            <SelectInput source="river" label="Fluss" choices={rivers} />
            <NumberInput source="from" label="von" />
            <NumberInput source="to" label="bis" />
            <NumberInput source="interval" label="Interval" />
        </SimpleForm>
    </Edit>
);
