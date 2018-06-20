import React from 'react';
import { List, Segment, Icon, Label, Divider } from 'semantic-ui-react';
import moment from 'moment';

import ResultBox from './result-box';

const noBorder = { border: "none", boxShadow: "none" };

export default ({ returnJourney, origin, dest, depDate, retDate, flightResult }) => {
    const arr = flightResult.map((res, idx) => res.up && res.down
        ? <ResultBox key={idx} up={res.up} down={res.down} />
        : <ResultBox key={idx} up={res} />);

    return origin && dest
        ? <div>
            <Segment.Group style={noBorder} horizontal>
                <Segment style={noBorder} textAlign="left">
                    <Label size="big">{origin}</Label>
                    <Icon name="angle right" size="big" />
                    <Label size="big">{dest}</Label>
                    {returnJourney ?
                        [<Icon key={'icon'} name="angle right" size="big" />,
                        <Label key={'label'} size="big">{origin}</Label>] : null}
                </Segment>
                <Segment style={noBorder} textAlign="right">
                    <div>{`Depart : ${moment(depDate).format('Do MMM YYYY')}`}</div>
                    <div>{retDate ? `Return : ${moment(retDate).format('Do MMM YYYY')}` : ''}</div>
                </Segment>
            </Segment.Group>
            <Divider />
            <List style={{ overflowY: "auto", height: window.innerHeight - 200 }}>{arr}</List>
        </div>
        : <div />;
};