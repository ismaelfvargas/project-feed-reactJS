import styles from "../Avatar/Avatar.module.css";

export function Avatar({ hasBorder = true, src }){

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    );
}
