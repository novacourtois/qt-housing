import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const profileView = (props) => (

  <div>
    <AppBar title="QT Housing" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

    <Card>
      <CardHeader avatar="images/jsa-128.jpg"/>

      <CardText>
      <TextField id="text-field-default" hintText="Name" multiLine={true} rows={1}
      //  defaultValue={this.props.user.name}
      />
      <TextField id="text-field-default" hintText="Email" multiLine={true} rows={1}
      //defaultValue={props.user.email}
      />
      <TextField id="text-field-default" hintText="pronoun(s)" multiLine={true} rows={1}
      //  defaultValue={this.props.prononoun}
      />
      <CardTitle title="About">
      </CardTitle>
      <TextField id="text-field-default" hintText="My Story" multiLine={true} rows={10}
      //  defaultValue={this.props.about}
      />

      <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
        <RadioButton value="light" label="Seek Housing"/>
        <RadioButton value="not_light" label="Offer Housing"/>
      </RadioButtonGroup>

      </CardText>

      <CardActions>
        <FlatButton label="Update" />
      </CardActions>
    </Card>
  </div>
);


export default profileView;
