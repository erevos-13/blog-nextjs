import React from "react";
import styles from "./button-ui.module.css";
const ButtonUi: React.FC<{onClick?: () => void, disabled?: boolean}> = (props) => {
    return (<button disabled={(props.disabled) ? props.disabled : false} onClick={props.onClick} className={styles.btn}>{props.children}</button>)
}

export default ButtonUi;