import React from 'react';
import { Input, Label, Form, Tab, Segment, Button } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import DateSelector from './date-selector';

const box = ({
    showRetDate,
    origin, onOriginChange, dest, onDestChange,
    depDate, onDepDateChange, retDate, onRetDateChange,
    search, retDateEmpty
}) => (
        <Form>
            <Form.Field style={{ display: "flex" }}>
                <Input style={{ width: "280px" }} placeholder='Enter Origin City' value={origin} onChange={onOriginChange} />
            </Form.Field>
            <Form.Field style={{ display: "flex" }}>
                <Input style={{ width: "280px" }} placeholder={'Enter Destination City'} value={dest} onChange={onDestChange} />
            </Form.Field>
            <Form.Field style={{ display: "flex" }}>
                <DateSelector dateLabel={'Departure Date'} selected={depDate} onChange={onDepDateChange} />
            </Form.Field>
            {showRetDate
                ? <Form.Field style={{ display: "flex" }}>
                    <DateSelector dateLabel={'Return Date'} selected={retDate} onChange={onRetDateChange} error={retDateEmpty} />
                </Form.Field>
                : null}
            <Form.Field style={{ display: "flex" }}>
                <Button primary onClick={search}>Search</Button>
            </Form.Field>
        </Form>
    );

const panes = (props) => [
    { menuItem: 'One way', render: () => <Tab.Pane>{box(props)}</Tab.Pane> },
    { menuItem: 'Return', render: () => <Tab.Pane>{box(props)}</Tab.Pane> }
];

class SearchBox extends React.Component {

    constructor() {
        super();
        this.state = { origin: '', dest: '', refinedPrice: 20000 };
    }

    onDepDateChange(depDate) {
        this.setState({ depDate });
    }

    onRetDateChange(retDate) {
        this.setState({ retDate });
    }

    onOriginChange(origin) {
        this.setState({ origin });
    }

    onDestChange(dest) {
        this.setState({ dest });
    }

    onRefinePrice(value) {
        this.setState({ refinedPrice: value });
    }

    search() {
        if ((!this.props.showRetDate) || this.state.retDate) {
            this.props.onSearch(
                this.state.origin,
                this.state.dest,
                this.state.depDate ? this.state.depDate.format('YYYY-MM-DD') : null,
                this.state.retDate ? this.state.retDate.format('YYYY-MM-DD') : null,
                this.state.refinedPrice
            );
        }
    }

    onTabChange(e, data) {
        this.setState({ refinedPrice: 20000 });
        if (data.activeIndex === 0) {
            this.setState({ retDate: null });
        }
    }

    render() {
        return (
            <div>
                <Tab
                    panes={panes({
                        showRetDate: this.props.showRetDate,
                        origin: this.state.origin,
                        dest: this.state.dest,
                        onOriginChange: (e, data) => this.onOriginChange(data.value),
                        onDestChange: (e, data) => this.onDestChange(data.value),
                        depDate: this.state.depDate,
                        retDate: this.state.retDate,
                        onDepDateChange: this.onDepDateChange.bind(this),
                        onRetDateChange: this.onRetDateChange.bind(this),
                        search: this.search.bind(this)
                    })}
                    onTabChange={(e, data) => {
                        this.onTabChange(e, data);
                        this.props.onTabChange(e, data);
                    }}
                />
                <Segment padded>
                    <Label attached='top left'>Refine flight search</Label>
                    <InputRange
                        maxValue={20000}
                        minValue={0}
                        value={this.state.refinedPrice}
                        onChange={this.onRefinePrice.bind(this)}
                        onChangeComplete={(value) => this.props.onPriceChange(value, this.props.initResult)} />
                </Segment>
            </div>
        );
    }
}

export default SearchBox;