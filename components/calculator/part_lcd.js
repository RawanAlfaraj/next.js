import React from 'react'

export default class LCD extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const _p = this.props;

        return(
            <div className="calc-obj-lcd bg-opacity-25">
                <div className="calc-obj-lcd-text">
                    {_p.text}
                </div>
            </div>
        )
    }
}