import React, { Fragment, useState } from 'react';
import { Typography, Slider } from '@bitchin/react-material-web';
import Example from '../example';
import PageTitle from '../page-title';

const SliderPage = () => {
  const [continuousVal, setContinuousVal] = useState(10.25);
  const [discreteVal, setDiscreteVal] = useState(100);

  return (
    <Fragment>
      <PageTitle>Sliders</PageTitle>

      <Typography use="headline5" component="h3">Continuous Slider</Typography>
      <Example style={{ padding: '32px 32px 16px 16px' }}>
        <Slider
          min={0}
          max={200}
          value={continuousVal}
          onChange={setContinuousVal}
          label="some label"
        />
        <Typography component="p">
          Value:
          {' '}
          {continuousVal}
        </Typography>
      </Example>

      <Typography use="headline5" component="h3">Discrete Slider</Typography>
      <Example style={{ padding: '32px 32px 16px 16px' }}>
        <Slider
          min={50}
          max={200}
          discrete
          value={discreteVal}
          onChange={setDiscreteVal}
        />
        <Typography component="p">
          Value:
          {' '}
          {discreteVal}
        </Typography>
      </Example>

      <Typography use="headline5" component="h3">Discrete Slider with step</Typography>
      <Example style={{ padding: '32px 32px 16px 16px' }}>
        <Slider
          min={50}
          max={200}
          discrete
          step={25}
        />
      </Example>

      <Typography use="headline5" component="h3">Discrete Slider with step and markers</Typography>
      <Example style={{ padding: '32px 32px 16px 16px' }}>
        <Slider
          min={50}
          max={200}
          discrete
          step={25}
          markers
        />
      </Example>

      <Typography use="headline5" component="h3">Disabled</Typography>
      <Example style={{ padding: '32px 32px 16px 16px' }}>
        <Slider
          min={50}
          max={200}
          discrete
          step={25}
          markers
          disabled
        />
      </Example>
    </Fragment>
  );
};

export default SliderPage;
