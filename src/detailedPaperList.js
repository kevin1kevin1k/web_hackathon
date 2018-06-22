import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PaperList from './paperList';

class DetailedPaperList extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={6}>
                <Paper>
                    <Grid container justify="center">
                        <Typography variant="headline" component="h3">
                            {this.props.title}
                        </Typography>
                    </Grid>
                    <Grid container justify="flex-end">
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.props.onlyInfluential}
                                    onChange={this.props.updateOnlyInfluential}
                                    color="primary"
                                />
                            }
                            label="Only influential"
                        />
                    </Grid>
                    <PaperList
                        list={this.props.list}
                        handleChooseTitle={this.props.handleChooseTitle}
                        onlyInfluential={this.props.onlyInfluential}
                        handleToggleChecked={this.props.handleToggleChecked}
                        checkedList={this.props.checkedList}
                    />
                </Paper>
            </Grid>
        );
    }
}

export default DetailedPaperList;