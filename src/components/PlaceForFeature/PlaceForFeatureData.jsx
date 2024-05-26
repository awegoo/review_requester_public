import React from 'react';
import {data} from '/amplify/data/resource.ts';

// const { data: events } = await client.models.event.list()
const PlaceForFeatureData = () => {
    const styles = {
        container: {
            height: '70px',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            border: '1px solid #f0f0f0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
        },
        heading: {
            color: '#333',
            fontSize: '24px',
        }
        };

    return(
        <div style={styles.container}>
        <h1 style={styles.heading}>Test</h1>
        {/* <p>{events}</p> */}
        </div>
    )
}
export default PlaceForFeatureData