import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { DisplayBalance } from './DisplayBalance';

export const DisplayBalances = () => {
  return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Income' value='10215.25' color='green' />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title='Expenses' value='623.15' color='red' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}
