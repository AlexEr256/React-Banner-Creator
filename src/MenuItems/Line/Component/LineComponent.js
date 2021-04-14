import React from 'react'
import ChooseColor from '../../../helpers/ChooseColor'

export default function LineComponent({SetColor, Color}){
    return(
        <div style={{width:'100%'}}>
            <ChooseColor SetColor={SetColor} Color={Color} />
        </div>
    )
}