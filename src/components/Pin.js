import React, { PureComponent } from 'react';

export default class Pin extends PureComponent {
    render() {
        const { size=50, onClick } = this.props;

        return (
        <svg height={size} width={size} onClick={onClick}>
            <circle cx="50" cy="50" r="15" fill="red" stroke="red" stroke-width= "4" />
        </svg>
        )
    }
}



