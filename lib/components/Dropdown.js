import React from 'react'

function vDirectionClass(dir) {
    dir = dir === DropdownContent.UP ? dir : DropdownContent.DOWN

    return 'v-direction-' + dir
}

function hDirectionClass(dir) {
    dir = dir === DropdownContent.LEFT ? dir : DropdownContent.RIGHT

    return 'h-direction-' + dir
}

export class DropdownContent extends React.Component {
    render() {
        const className = `dropdown-content ${hDirectionClass(this.props.hDirection)} ${vDirectionClass(this.props.vDirection)}`

        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

DropdownContent.UP = 'up'
DropdownContent.DOWN = 'down'
DropdownContent.LEFT = 'left'
DropdownContent.RIGHT = 'right'

export function Dropdown(props) {
    const dropdownClass = props.open ? 'dropdown open' : 'dropdown'

    return (
        <div className={dropdownClass}>
            {props.children}
        </div>
    )
}
