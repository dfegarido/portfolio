const Footer = () => {
    return (
        <div style={styles.container}>
            <div className={"grid justify-center pt-5"} style={styles.rights}>
               Copy Rights 2022 &#174; Darwin Fegarido All Rights Reserved
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '59px',
        background: '#000000',
    },
    rights: {
        position: 'relative',
        fontWeight: '800',
        fontSize: '15px',
        lineHeight: '34px',
        color: '#827F7F',
    }
}

export default Footer;