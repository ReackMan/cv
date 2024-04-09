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
    padding?: string
    flexGrow?: string
    href?: string
    fill?: string
}


export const Logo = (props: LogoPropsType) => {
    return (
        <StyledLogo textAlign={props.textAlign} flexBasis={props.flexBasis}
                    padding={props.padding} flexGrow={props.flexGrow}>
            <a href={props.href || '/'}>
                <Icon iconId={props.iconId} width={props.width} height={props.height}
                      fill={props.fill} viewBox={props.viewBox}/>
                <span>{props.text}</span>
            </a>
        </StyledLogo>
    )
}

