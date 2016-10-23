import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const profileView = () => (

  <div>
    <AppBar title="QT Housing" iconClassNameRight="muidocs-icon-navigation-expand-more"/>



    <Card>
      <CardHeader avatar="images/jsa-128.jpg"/>

      <CardTitle title="Daisy" subtitle="they/them" />
      <CardTitle title="About" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="See More" />
        <FlatButton label="Edit" />
      </CardActions>
    </Card>
  </div>
);


export default profileView;
