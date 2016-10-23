import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const profileView = () => (

  <div>
    <AppBar title="QT Housing" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

    <Card>
      <CardHeader avatar="images/jsa-128.jpg"/>

      <CardText>
      <TextField id="text-field-default" hintText="Name" multiLine={true} rows={1}
        defaultValue={this.props.user.name}
      />
      <TextField id="text-field-default" hintText="prononoun(s)" multiLine={true} rows={1}
        defaultValue={this.props.prononoun}
      />
      </CardText>
      <CardTitle title="About">
      </CardTitle>
      <CardText>
      <TextField id="text-field-default" hintText="My Story" multiLine={true} rows={10}
        defaultValue={this.props.about}
      />
      </CardText>
      <CardActions>
        <FlatButton label="See More" />
        <FlatButton label="Edit" />
      </CardActions>
    </Card>
  </div>
);


export default profileView;
