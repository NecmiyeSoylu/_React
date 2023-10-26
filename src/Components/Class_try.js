import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Class_try extends Component {
    static defaultProps={
        dep:"unknown",
        std_num:-1,
        name:"unknown",
        surame:"unknown"
    };
    render() {
        const {std_num,dep,name,surname}=this.props;
        return (
        <div>
            <h4>{std_num}</h4>
        </div>
        );
    }
}
Class_try.propTypes = {
    dep:PropTypes.string,
    std_num:PropTypes.number.isRequired,
    name:PropTypes.string,
    surname:PropTypes.string

}
export default Class_try;