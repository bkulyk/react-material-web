import React, { Fragment } from 'react';
import {
  Typography,
  Grid,
  GridCell,
  GridInner,
} from '@bitchin/react-material-web';
import Example from '../example';
import PageTitle from '../page-title';

const cellStyle = {
  backgroundColor: 'white',
  border: '1px solid #888',
  textAlign: 'center',
  padding: '12px 4px',
};

const nestedStyle = {
  backgroundColor: '#ccc',
  border: '1px solid #000',
  textAlign: 'center',
  padding: '4px 0px',
};

const makeArray = x => Array(x).fill(0, 0, x);
const makeKey = i => `cell-${i}`;

const align = ['top', 'middle', 'bottom'];

const GridPage = () => (
  <Fragment>
    <PageTitle>Layout Grids</PageTitle>

    <section>
      <Typography component="p">
        Material design’s responsive UI is based on a column-variate grid layout.
        It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.
      </Typography>
    </section>

    <section>
      <Typography use="headline5" component="h3">A Grid</Typography>
      <Typography component="p">Use the `order` prop to reorder the columns.</Typography>
      <Example>
        <Typography component="div">
          <Grid>
            <GridInner>
              {makeArray(12).map((_v, i) => (
                <GridCell style={cellStyle} order={12 - i} key={makeKey(i)}>{i + 1}</GridCell>
              ))}
            </GridInner>
          </Grid>
        </Typography>
      </Example>
    </section>

    <section>
      <Typography use="headline5" component="h3">Cell Alignment</Typography>
      <Typography component="p">
        Cell alignment requires a cell height smaller than the inner height of the grid.
      </Typography>
      <Example>
        <Typography component="div">
          <Grid>
            <GridInner style={{ height: '200px' }}>
              {makeArray(12).map((_v, i) => (
                <GridCell
                  style={cellStyle}
                  align={align[i % 3]}
                  order={12 - i}
                  key={makeKey(i)}
                >
                  {i + 1}
                </GridCell>
              ))}
            </GridInner>
          </Grid>
        </Typography>
      </Example>
    </section>

    <section>
      <Typography use="headline5" component="h3">Cell Span</Typography>
      <Typography component="p">Use the `span` make the columns span multiple columns.</Typography>
      <Example>
        <Typography>
          <Grid>
            <GridInner>
              {makeArray(12).map((_v, i) => (
                <GridCell style={cellStyle} key={makeKey(i)}>{i + 1}</GridCell>
              ))}
              {makeArray(4).map((_v, i) => (
                <GridCell style={cellStyle} span={3} key={makeKey(i)}>{i + 1}</GridCell>
              ))}
              {makeArray(12).map((_v, i) => (
                <GridCell style={cellStyle} key={makeKey(i)}>{i + 1}</GridCell>
              ))}
            </GridInner>
          </Grid>
        </Typography>
      </Example>
    </section>

    <section>
      <Typography use="headline5" component="h3">Nesting</Typography>
      <Typography component="p">You can nest grids.</Typography>
      <Example>
        <Typography component="div">
          <Grid>
            <GridInner>
              {makeArray(2).map((_v, i) => (
                <GridCell style={cellStyle} span={6} key={makeKey(i)}>
                  <GridInner>
                    <GridCell style={nestedStyle} span={3}>a</GridCell>
                    <GridCell style={nestedStyle} span={3}>b</GridCell>
                    <GridCell style={nestedStyle} span={3}>c</GridCell>
                    <GridCell style={nestedStyle} span={3}>d</GridCell>
                  </GridInner>
                </GridCell>
              ))}
            </GridInner>
          </Grid>
        </Typography>
      </Example>
    </section>
  </Fragment>
);

export default GridPage;
