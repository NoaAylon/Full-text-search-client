import React from 'react'
import { Paper } from '@material-ui/core';

export function Document(props) {
    return <Paper style={{ flex: 2, height: 200, padding: 20, overflowY: 'scroll' }}>
        {props.children}
    </Paper>
}
