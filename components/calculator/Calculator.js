import React from 'react'
import LCD   from './part_lcd'
import KEYS  from './part_keys'

const originalState = {
    number:  0,
    command: '',
    stringToCompute: ''
};

export default class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state = {...originalState};
    }

    handleData = (data) => {
        if(data === '='){
            return this.handleTotal();
        }else if(data === 'cancel'){
            return this.setState({...originalState});
        }else{
            return this.updateStringToCompute(data);
        }
    };

    handleTotal = () => {
        const _s = this.state;
        if(!_s.stringToCompute){
            return 0;
        }else{
            const total = eval(_s.stringToCompute);
            return this.setState({number: total});
        }
    };

    updateStringToCompute = (data) => {
        const _s  = this.state;
        const str = _s.stringToCompute;
        const newString = '' + str + data;
        return this.setState({stringToCompute: newString});
    };

    render(){

        const _s = this.state;

        return(
            <div className="calc-grid-obj-cont-cntr">
                <div className="calc-obj-cont fadeIn animated">

                    <LCD text={_s.number} />

                    <div className="calc-obj-recap">
                        {_s.stringToCompute || _s.number}
                    </div>

                    <div className="calc-obj-body bg-opacity-50">
                        <KEYS action={data => this.handleData(data)} />
                    </div>

                </div>
            </div>
        )
    }
}