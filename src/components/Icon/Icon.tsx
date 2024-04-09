import React from 'react';
import iconsSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '97px'} height={props.height || '59px'} viewBox={props.viewBox || '0 0 97 59'}
             fill={props.fill || 'currentColor'}>
            <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
        </svg>
    );
};
