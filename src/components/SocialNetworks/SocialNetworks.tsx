import React from "react";
import {Logo} from "../logo/Logo";
import {StyledSocialNetworks} from "./StyledSocialNetworks";

type SocialNetworksProps = {
    padding?: string
    theme: any
    placeSocials?: string
}

const SocialNetworks = (props: SocialNetworksProps) => {

    const socials = [
        {
            iconId: props.theme === 'light' ? 'gitHub' : 'gitHub-light',
            width: '30px',
            height: '30px',
            viewBox: '0 0 30 30',
            href: 'https://github.com/ReackMan'
        },
        {
            iconId: props.theme === 'light' ? 'telegram' : 'telegram-light',
            width: '32px',
            height: '32px',
            viewBox: '0 0 32 32',
            href: 'https://t.me/reackman'
        },
        {
            iconId: props.theme === 'light' ? 'linkedin' : 'linkedin-light',
            width: '32px',
            height: '32px',
            viewBox: '0 0 30 30',
            href: 'https://linkedin.com/in/reackman'
        },
    ]

    return (
        <StyledSocialNetworks padding={props.padding} placeSocials={props.placeSocials}>
            {socials.map(s =>
                <Logo iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viewBox} href={s.href}/>)
            }
            {/*<Logo iconId={props.theme === 'light' ? 'gitHub' : 'gitHub-light'} width='30px' height='30px' viewBox='0 0 30 30'/>*/}
            {/*<Logo iconId={props.theme === 'light' ? 'twitter' : 'twitter-light'} width='32px' height='32px' viewBox='0 0 32 32'/>*/}
            {/*<Logo iconId={props.theme === 'light' ? 'linkedin' : 'linkedin-light'} width='32px' height='32px' viewBox='0 0 30 30'/>*/}
        </StyledSocialNetworks>
    )
}


export default SocialNetworks