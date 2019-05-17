import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';

import Example from '../Example';

addDecorator(withA11y)

const components = storiesOf('Components/Example', module);
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Button', () => (
    <Example
      text={text('テキスト', 'ああああ')}
      flag={boolean('テキスト表示', true)}
      action={action('ぽちっとな')}
    />
  ), {
    cssresources: [
        {
         name: 'fontawesome',
         code: '<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>',
         picked: true,
         }, {
             name: 'whitetheme',
             code: '<style>.fa { color: #fff }</style>',
             picked: true,
         },
     ],
 })