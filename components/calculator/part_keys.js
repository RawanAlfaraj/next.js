import React from 'react'

export default class Keys extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const _p = this.props;

        const keys = [

            {
                key:   7,
                value: 7
            },
            {
                key:   8,
                value: 8
            },
            {
                key:   9,
                value: 9
            },
            {
                key:   '/',
                value: '÷'
            },
            {
                key:   4,
                value: 4
            },
            {
                key:   5,
                value: 5
            },
            {
                key:   6,
                value: 6
            },
            {
                key:   '*',
                value: 'x'
            },
            {
                key:   1,
                value: 1
            },
            {
                key:   2,
                value: 2
            },
            {
                key:   3,
                value: 3
            },
            {
                key:   '-',
                value: '-'
            },
            {
                key:   0,
                value: 0
            },
            {
                key:   'cancel',
                value: 'c'
            },
            {
                key:   '=',
                value: '='
            },
            {
                key:   '+',
                value: '+'
            }
        ];

        return(
            <div className="calc-obj-keys-cont">
                {keys.map((key) => (
                    <div
                        className="calc-obj-key"
                        key={key.key}
                        onClick={() => _p.action(key.key)}
                    >
                        {key.value}
                    </div>
                ))}
            </div>
        )
    }

}