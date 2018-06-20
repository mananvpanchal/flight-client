import React from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react';

const noBorder = { border: "none", boxShadow: "none" };

export default ({ up, down }) => {
    const totalAmt = up.fare + (down ? down.fare : 0 );
    return (
        <div>
            <Segment.Group style={noBorder}>
                <Segment style={{ ...noBorder, fontWeight: "bold", fontSize: "24px" }} textAlign="left">{`Rs. ${totalAmt}`}</Segment>
                <Segment.Group horizontal style={{ border: "none" }}>
                    <Segment style={noBorder} textAlign="left">
                        <div style={{ padding: "5px" }}>{up.id}</div>
                        <div style={{ fontSize: "20px", padding: "5px" }}>{`${up.oCode} > ${up.dCode}`}</div>
                        <div style={{ fontSize: "20px", whiteSpace: "pre", padding: "5px" }}>{`Depart: ${up.depTime}`}</div>
                        <div style={{ fontSize: "20px", whiteSpace: "pre", padding: "5px" }}>{`Arrive:   ${up.arrTime}`}</div>
                    </Segment>
                    {down ? 
                    <Segment style={noBorder} textAlign="left">
                        <div style={{ padding: "5px" }}>{down.id}</div>
                        <div style={{ fontSize: "20px", padding: "5px" }}>{`${down.oCode} > ${down.dCode}`}</div>
                        <div style={{ fontSize: "20px", whiteSpace: "pre", padding: "5px" }}>{`Depart: ${down.depTime}`}</div>
                        <div style={{ fontSize: "20px", whiteSpace: "pre", padding: "5px" }}>{`Arrive:   ${down.arrTime}`}</div>
                    </Segment> : <Segment style={noBorder} textAlign="left"/>}
                    <Segment style={noBorder} textAlign="left">
                        <Segment style={{ position: "absolute", width: "130px", height: "60px" }}></Segment>
                        <Button primary style={{ position: "absolute", bottom: "18px" }}>Book this flight</Button>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
            <Divider />
        </div>
    );
};