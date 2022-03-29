import React from 'react';
import { Story, Meta } from '@storybook/react';
import DotNavigation from './DotNavigation';
import Carousel, { Props } from './index';
import './index.stories.scss';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const MinimalStylingTemplate: Story<Props> = (args) => (
  <Carousel
    className="minimal-styling-carousel"
    indicatorComponent={<DotNavigation />}
  >
    <div data-key="unique-key" className="slide">This is a slide</div>
    <div data-key="another-key" className="slide">This is another slide</div>
    <div data-key="last-slide-key" className="slide">The last slide</div>
  </Carousel>
);

export const MinimalStyling = MinimalStylingTemplate.bind({});

MinimalStyling.args = {};

MinimalStyling.parameters = {
  layout: 'fullscreen',
}

const FeedbackTemplate: Story<Props> = (args) => (
  <Carousel
    className="feedback-carousel"
    slideClassName="feedback-carousel-slide"
    indicatorComponent={<DotNavigation />}
  >
    <div data-key="unique-key" className="slide">
      Arcane Research has the unique ability to provide a nuanced take on the market every week, with its data-driven and institutional-grade reports. Their white-label services have proved valuable to both Luno's employees and customers, making sure we never miss important market events.
    </div>
    <div data-key="another-key" className="slide">
      Arcane quickly ramped up to provide our funds business with outsourced research that helped us evaluate fund management strategies and create marketing materials. Their reports have quickly become the go-to resource for our institutional and sophisticated investors. They're smart, responsive, and easy to work with.
    </div>
    <div data-key="last-key" className="slide">
      It was a pleasure working with the Arcane Research team to map out the crypto trading ecosystem. They demonstrated an excellent understanding of both the traditional finance infrastructure and the emerging institutional infrastructure in crypto and were able to clearly explain these to the reader.
    </div>
  </Carousel>
);

export const Feedback = FeedbackTemplate.bind({});

Feedback.args = {};

Feedback.parameters = {
  layout: 'fullscreen',
}
