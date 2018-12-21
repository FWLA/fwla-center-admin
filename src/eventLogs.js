import React from 'react';
import { List, Datagrid, TextField, DeleteButton } from 'react-admin';

export const EventLogList = (props) => (
    <List title="Event Logs" {...props}>
        <Datagrid>
            <TextField source="time" label="Zeit" />
            <TextField source="type" label="Level" />
            <TextField source="message" label="Nachricht" />
            <DeleteButton />
        </Datagrid>
    </List>
);
