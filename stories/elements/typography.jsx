import React from 'react';

import StoryContainer from '../StoryContainer.jsx'
import { storiesOf } from '@storybook/react';

storiesOf('Typography', module)
    .add('White background', () => {
        return (<StoryContainer padding="large">
            <div className="text-display-4">Display 4</div>
            <div className="text-display-3">Display 3</div>
            <div className="text-display-2">Display 2</div>
            <div className="text-display-1">Display 1</div>
            <div className="text-headline">Headline</div>
            <div className="text-title">Title</div>
            <div className="text-subheading">Subheading</div>
            <div className="text-body-2">Body-2</div>
            <div className="text-body-1">Body-1</div>
            <div className="text-caption">Caption</div>
        </StoryContainer>)
    })
    .add('Light theme', () => {
        return (<StoryContainer theme="light" padding="large">
            <div className="text-display-4">Display 4</div>
            <div className="text-display-3">Display 3</div>
            <div className="text-display-2">Display 2</div>
            <div className="text-display-1">Display 1</div>
            <div className="text-headline">Headline</div>
            <div className="text-title">Title</div>
            <div className="text-subheading">Subheading</div>
            <div className="text-body-2">Body-2</div>
            <div className="text-body-1">Body-1</div>
            <div className="text-caption">Caption</div>
        </StoryContainer>)
    })
    .add('Dark theme', () => {
        return (<StoryContainer theme="dark" padding="large">
            <div className="text-display-4">Display 4</div>
            <div className="text-display-3">Display 3</div>
            <div className="text-display-2">Display 2</div>
            <div className="text-display-1">Display 1</div>
            <div className="text-headline">Headline</div>
            <div className="text-title">Title</div>
            <div className="text-subheading">Subheading</div>
            <div className="text-body-2">Body-2</div>
            <div className="text-body-1">Body-1</div>
            <div className="text-caption">Caption</div>
        </StoryContainer>)
    })
