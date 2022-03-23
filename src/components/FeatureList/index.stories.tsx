import React from 'react';
import { Story, Meta } from '@storybook/react';
import FeatureList, { Props } from './index';
import Button from '../Button';

export default {
  title: 'Components/FeatureList',
  component: FeatureList,
} as Meta;

const Template: Story<Props> = (args) => (
  <FeatureList {...args} />
);

export const WithContentfulRichText = Template.bind({});

WithContentfulRichText.args = {
  content: {
    itemsCollection: [
      {
        title: 'Learn.',
        image: {
          url: 'https://images.ctfassets.net/033pb98fujnc/7FgZrvT5Jw7Du1nmUewUG6/81fce3ddf169f1c1409632b04caf93a9/Learn_illustration.png'
        },
        text: {
          "json": {
              "data": {},
              "content": [
                  {
                      "data": {},
                      "content": [
                          {
                              "data": {},
                              "marks": [],
                              "value": "Go from beginner to expert with our market leading reports & analysis.",
                              "nodeType": "text"
                          }
                      ],
                      "nodeType": "paragraph"
                  },
                  {
                      "data": {},
                      "content": [
                          {
                              "data": {},
                              "marks": [],
                              "value": "Here’s another parahraphh just for fun.",
                              "nodeType": "text"
                          }
                      ],
                      "nodeType": "paragraph"
                  },
              ],
              "nodeType": "document"
          }
        }
      },
      {
        title: 'Invest.',
        image: {
          url: 'https://images.ctfassets.net/033pb98fujnc/5W6SeLgGGrf4LEnvHEZWlH/c63b13873a37e5e2682923c8ebefc4cc/Invest_Illustration..png'
        },
        text: {
          "json": {
              "data": {},
              "content": [
                  {
                      "data": {},
                      "content": [
                          {
                              "data": {},
                              "marks": [],
                              "value": "Build generational wealth with our long term investment products.",
                              "nodeType": "text"
                          }
                      ],
                      "nodeType": "paragraph"
                  }
              ],
              "nodeType": "document"
          }
        }
      }
    ]
  },
};

export const WithContent = Template.bind({});

WithContent.args = {
  content: {
    itemsCollection: [
      {
        title: 'Invest.',
        image: {
          url: 'https://images.ctfassets.net/033pb98fujnc/30UPCVsMQmYHJgsWnyYEvw/72e8a7438335809c1d3a1767d0396786/The_fund_illustration.png'
        },
        content: (
          <div>
            Our mission is to give people the <strong>confidence to trust digital assets</strong> and thereby enable <strong>worldwide adoption</strong>.
          </div>
        )
      }
    ]
  },
};

export const WithButton = Template.bind({});

WithButton.args = {
  content: {
    itemsCollection: [
      {
        title: 'Contact Us',
        image: {
          url: 'https://images.ctfassets.net/033pb98fujnc/30UPCVsMQmYHJgsWnyYEvw/72e8a7438335809c1d3a1767d0396786/The_fund_illustration.png'
        },
        content: 'Let our expert team guide your decision-making with bespoke research and analysis.',
        button: {
          text: 'Email Us',
          mailto: 'research@arcane.no'
        }
      }
    ]
  },
  renderButton: (button) => (
    <a href={`mailto:${button.mailto}`} style={{ display: 'inline-block' }}>
      <Button>{button.text}</Button>
    </a>
  )
};
