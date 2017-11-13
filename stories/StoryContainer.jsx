import React from 'react';

const containerTheme = (props = {}) => {
    return props.theme ? `${props.theme}-theme` : ''
}

const containerPadding = (props = {}) => {
    return props.padding ? `padding-${props.padding}` : ''
}

export default function StoryContainer(props) {
    return (<div className={`${props.className || ''} ${containerPadding(props)} ${containerTheme(props)}`}>{props.children}</div>)
}
