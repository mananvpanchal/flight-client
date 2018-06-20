import React from 'react';
import { Input } from 'semantic-ui-react';

class DateInput extends React.Component {
    render() {
        return (
            <div>
                <Input 
                    style={{ width: "270px" }}
                    onClick={this.props.onClick} 
                    placeholder={this.props.dateLabel} 
                    defaultValue={this.props.value} />
            </div>
        );
    }
}

export default DateInput;