import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
});

class AdminPannel extends React.Component {
    state = {
        // file1: true,
        // file2: true,
        // file3: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        const { file1, file2, file3 } = this.state;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Admin Panel</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={file1} onChange={this.handleChange('gilad')} value="gilad" />
                            }
                            label="file1"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={file2} onChange={this.handleChange('jason')} value="jason" />
                            }
                            label="file2"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={file3} onChange={this.handleChange('antoine')} value="antoine" />
                            }
                            label="file3"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(AdminPannel);
