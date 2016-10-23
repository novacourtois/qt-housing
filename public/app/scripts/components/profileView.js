import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const profileView = (props) => {
  console.log(props);
  return (

  <div>
    <AppBar title="QT Housing" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

    <Card>
      <CardHeader avatar="https://global.psu.edu/sites/default/files/images/Blank_Avatar_Female.jpg"/>

      <CardText>
      <TextField id="text-field-default" hintText="Name" rows={1}
      //  defaultValue={this.props.user.username}
      />
      <TextField id="text-field-default" hintText="Email" rows={1} defaultValue={props.user.email} />
      <TextField id="text-field-default" hintText="pronoun(s)" rows={1}
        //defaultValue={this.props.user.pronouns}
      />
      <CardTitle title="About">
      </CardTitle>
      <TextField id="text-field-default" hintText="My Story" multiLine={true} rows={10}
      //  defaultValue={this.props.user.headline}
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
)
};


export default profileView;
