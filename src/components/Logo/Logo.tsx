import {Icon} from "../icon/Icon";
import {StyledLogo} from "./StyledLogo";

type LogoPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    textAlign?: string
    flexBasis?: string
    text?: string
}


export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogo textAlign={props.textAlign} flexBasis={props.flexBasis}>
            <a href='/'>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <span>{props.text}</span>
            </a>
        </StyledLogo>
    )
}

