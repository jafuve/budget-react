import React from 'react'
import { Statistic } from 'semantic-ui-react';

export const DisplayBalance = ({title, value, color='black', size='tiny'}) => {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign:'center'}} >
                {title}
            </Statistic.Label>
            <Statistic.Value>
                {value}
            </Statistic.Value>
        </Statistic>
    )
}
