import React from 'react';
import { List, Datagrid, TextField, DeleteButton } from 'react-admin';

export const EventLogList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="time" label="Time" />
            <TextField source="type" label="Type" />
            <TextField source="message" label="Message" />
            <DeleteButton />
        </Datagrid>
    </List>
);
