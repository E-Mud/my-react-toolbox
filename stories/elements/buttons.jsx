import React from 'react';

import StoryContainer from '../StoryContainer.jsx'
import { storiesOf } from '@storybook/react';

const buttonStyle = {marginRight: '10px'}

storiesOf('Button', module)
    .add('Text', () => {
        return (
            <div>
                <StoryContainer className="flex-container" padding="large">
                    <button style={buttonStyle}>NORMAL</button>
                    <button style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large">
                    <button className="primary" style={buttonStyle}>NORMAL</button>
                    <button className="primary" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="light">
                    <button style={buttonStyle}>NORMAL</button>
                    <button style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="light">
                    <button className="primary" style={buttonStyle}>NORMAL</button>
                    <button className="primary" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="dark">
                    <button style={buttonStyle}>NORMAL</button>
                    <button style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="dark">
                    <button className="primary" style={buttonStyle}>NORMAL</button>
                    <button className="primary" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
            </div>
        )
    })
    .add('Solid', () => {
        return (
            <div>
                <StoryContainer className="flex-container" padding="large">
                    <button className="raised primary" style={buttonStyle}>NORMAL</button>
                    <button className="raised primary" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large">
                    <button className="raised warn" style={buttonStyle}>NORMAL</button>
                    <button className="raised warn" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="light">
                    <button className="raised primary" style={buttonStyle}>NORMAL</button>
                    <button className="raised primary" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="light">
                    <button className="raised warn" style={buttonStyle}>NORMAL</button>
                    <button className="raised warn" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="dark">
                    <button className="raised primary" style={buttonStyle}>NORMAL</button>
                    <button className="raised primary" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
                <StoryContainer className="flex-container" padding="large" theme="dark">
                    <button className="raised warn" style={buttonStyle}>NORMAL</button>
                    <button className="raised warn" style={buttonStyle} disabled={true}>DISABLED</button>
                </StoryContainer>
            </div>
        )
    });
