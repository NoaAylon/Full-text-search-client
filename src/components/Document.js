import React from 'react'
import { Paper, Divider } from '@material-ui/core';

export function Document(props) {
    return <Paper style={{ flex: 2, height: 240, padding: '0 20px', overflowY: 'scroll' }}>
        <p>Selected Document</p>
        <Divider />
        {props.children}
    </Paper>
}
