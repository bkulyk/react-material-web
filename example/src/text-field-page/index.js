import React, { Fragment } from 'react';
import { Typography, TextField } from '@bitchin/react-material-web';
import Example from '../example';

const Eg = ({ children }) => (<div style={{ margin: '10px 0px' }}>{children}</div>);

const TextFieldPage = () => (
  <Fragment>
    <Typography use="headline4" component="h2">Form Controls</Typography>

    <Typography use="headline5" component="h3">Filled Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="filled-1"
          placeholder="placeholder text"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="filled-2"
          icon="event"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="filled-3"
          icon="event"
          label="Standard"
          help="Helper Text"
          iconPosition="trailing"
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Outlined Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="outlined-1"
          outlined
          placeholder="placeholder text"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="outlined-2"
          outlined
          placeholder="placeholder text"
          icon="favorite"
          label="Standard"
          help="Helper Text"
        />
      </Eg>

      <Eg>
        <TextField
          id="outlined-2"
          outlined
          placeholder="placeholder text"
          icon="favorite"
          label="Standard"
          help="Helper Text"
          iconPosition="trailing"
        />
      </Eg>
    </Example>

    <Typography use="headline5" component="h3">Full Width Text Input</Typography>
    <Example>
      <Eg>
        <TextField
          id="fullWidth-1"
          placeholder="Standard"
          help="Helper Text"
          fullWidth
        />
      </Eg>
    </Example>

    <br />
  </Fragment>
);

export default TextFieldPage;