import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { Button } from 'react-bootstrap'
import { Icon, TextInput } from '../../components'
import RejectionsForm from '.'

storiesOf('RejectionsForm', module)
  .add('not editable', () => (
      <RejectionsForm
          editable={false}
          criteriaPlaceholder='Format (mismatches, white-spaces, tag error or missing, special character, numeric format, truncated, etc.)'
          priority='Minor' textState='text-info' />
   ))
   .add('editable', () => (
        <RejectionsForm
            className='active'
            editable={true}
            criteriaPlaceholder='Format (mismatches, white-spaces, tag error or missing, special character, numeric format, truncated, etc.)'
            priority='Minor' textState='text-info' />
    ))
   .add('Admin screen', () => (
      <div className='container'>
        <h1>Reject translations settings</h1>
        <RejectionsForm
            editable={false}
            criteriaPlaceholder='Translation Errors (terminology, mistranslated, addition, omission, un-localized, do not translate, etc)'
            priority='Critical' textState='text-danger' />
        <RejectionsForm
            editable={true}
            className='active'
            criteriaPlaceholder='Language Quality (grammar, spelling, punctuation, typo, ambiguous wording, product name, sentence structuring, readability, word choice, not natural, too literal, style and tone, etc)'
            priority='Major' textState='text-warning' />
        <RejectionsForm
            editable={false}
            criteriaPlaceholder='Consistency (inconsistent style or vocabulary, brand inconsistency, etc.)'
            priority='Major' textState='text-warning' />
        <RejectionsForm
            editable={false}
            criteriaPlaceholder='Style Guide & Glossary Violations'
            priority='Minor' textState='text-info' />
        <RejectionsForm
            editable={false}
            criteriaPlaceholder='Format (mismatches, white-spaces, tag error or missing, special character, numeric format, truncated, etc.)'
            priority='Minor' textState='text-info' />
        <RejectionsForm
            editable={true}
            className='active'
            criteriaPlaceholder='Other (reason may be in comment section/history if necessary)'
            priority='Critical' textState='text-danger' />
        <div className='rejection-btns'>
         <Button bsStyle='primary' className='btn-left'>
            <Icon name='plus' className='s1' /> Add review criteria
          </Button>
          <Button bsStyle='info'>
           <Icon name='tick' className='s1' /> Save changes
          </Button>
        </div>
      </div>
  ))

