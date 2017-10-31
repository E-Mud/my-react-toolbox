import React from 'react'

class MasterDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {selectedDetail: props.selectedDetail || null}

        this.selectDetail = this.selectDetail.bind(this)
    }

    componentWillReceiveProps(props) {
        if(props.selectedDetail !== this.props.selectedDetail
            && props.selectedDetail !== this.state.selectedDetail) {
            this.setState({selectedDetail: props.selectedDetail})
        }
    }

    changeDetail(newSelected, oldSelected) {
        this.setState({selectedDetail: newSelected})

        this.props.onSelectionChanged(newSelected, oldSelected)
    }

    selectDetail(newSelected) {
        const oldSelected = this.state.selectedDetail

        if(newSelected === oldSelected && this.props.unselectOnToggle){
            newSelected = null
        }

        if(newSelected !== oldSelected) {
            const willChange = this.props.onSelectionWillChange(newSelected, oldSelected)

            if(willChange && willChange.then) {
                willChange.then((response) => {
                    if(response !== false) {
                        this.changeDetail(newSelected, oldSelected)
                    }
                })
            }else if(willChange !== false) {
                this.changeDetail(newSelected, oldSelected)
            }
        }
    }

    render() {
        return this.props.children(this.state.selectedDetail, this.selectDetail)
    }
}

const noop = () => {}

MasterDetail.defaultProps = {
    onSelectionChanged: noop,
    onSelectionWillChange: noop
}

export default MasterDetail
