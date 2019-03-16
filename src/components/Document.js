import React from 'react'
import { Paper, Divider } from '@material-ui/core';

export function Document(props) {
    return <Paper style={{ flex: 2, height: 400, padding: '0 20px', overflowY: 'scroll' }}>
        <p style={{ fontSize: '0.875rem', color: '#0000008a', marginTop: 20 }}>Selected Document</p>
        <Divider style={{ marginBottom: 20 }} />
        {props.children}
    </Paper>
}
