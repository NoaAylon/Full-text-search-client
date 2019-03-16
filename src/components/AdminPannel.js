import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { addDocument } from '../api/addDocument';
import { removeDocument } from '../api/removeDocument';

const styles = theme => ({
    root: {
        display: 'flex',
        margin: '20px 0'
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class AdminPannel extends React.Component {
    //documents
    state = {
        '001': true,
        '002': true,
        '003': true,
        '004': false,
        '005': false
    };

    handleChange = docId => event => {
        const isChecked = event.target.checked;
        this.setState({ [docId]: isChecked });
        if (event.target.checked) {
            addDocument(docId);
        } else {
            removeDocument(docId);
        }
    };

    render() {
        const { classes } = this.props;
        const file1 = this.state['001'];
        const file2 = this.state['002'];
        const file3 = this.state['003'];
        const file4 = this.state['004'];
        const file5 = this.state['005'];

        return (
            <Paper className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Admin Panel</FormLabel>
                    <FormHelperText>Add/Remove file from inverted index</FormHelperText>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox checked={file1} onChange={this.handleChange('001')} value="001" />
                            }
                            label="001"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={file2} onChange={this.handleChange('002')} value="002" />
                            }
                            label="002"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={file3} onChange={this.handleChange('003')} value="003" />
                            }
                            label="003"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={file4} onChange={this.handleChange('004')} value="004" />
                            }
                            label="004"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={file5} onChange={this.handleChange('005')} value="005" />
                            }
                            label="005"
                        />
                    </FormGroup>
                </FormControl>
            </Paper>
        );
    }
}

export default withStyles(styles)(AdminPannel);
