import React from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

class ReferenceList extends React.Component {
    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
    }

    handleQuery(e) {
        var children = e.target.parentElement.children;
        this.props.handleChooseTitle(children[0].innerHTML, children[1].innerHTML);
    }

    render() {
        var objectList = this.props.referenceList.map(item => (
            <ListItem button onClick={this.handleQuery}>
                {
                    item.isInfluential &&
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                }
                <ListItemText inset primary={item.title} secondary={item.id} />
            </ListItem>
        ));
        return (
            <div>
                <List component="nav">
                    {objectList}
                </List>
            </div>
        );
    }
}

export default ReferenceList;