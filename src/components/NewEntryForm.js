import React from 'react'
import { Form } from 'semantic-ui-react';
import { ButtonSaveOrCancel } from './ButtonSaveOrCancel';

export const NewEntryForm = () => {
  return (
    <Form unstackable >
        <Form.Group>
          <Form.Input 
            placeholder='New shinny thing'
            icon='tags'
            label='Description'
          />
          <Form.Input 
            width={4}
            label='Value'
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'
        />
        </Form.Group>
        <ButtonSaveOrCancel/>
    </Form>
  )
}
