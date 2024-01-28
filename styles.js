"use strict";
// styles.ts
Object.defineProperty(exports, "__esModule", { value: true });
var styles = {
    html: {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: 'rgb(255, 255, 255)',
        textAlign: 'center',
        fontFamily: 'Arial, Helvetica, sans-serif',
        margin: 0,
        padding: 0,
    },
    input: {
        fontSize: '1.1em',
    },
    label: {
        fontSize: '1.1em',
    },
    title: {
        backgroundColor: 'rgb(61, 61, 61)',
        fontSize: '1.1em',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        fontWeight: 'normal',
    },
    blurb: {
        backgroundColor: 'rgba(255, 255, 255, 0.386)',
        textAlign: 'center',
        margin: '1em auto 1em auto',
        width: '500px',
        padding: '.5em',
        borderRadius: '5px',
    },
    visualTitle: {
        fontWeight: 'bold',
        fontSize: '1.2em',
        paddingBottom: '.5em',
    },
    arrayVisual: {
        margin: '1em',
    },
    header: {
        backgroundColor: 'rgb(255, 255, 255)',
        backgroundSize: 'cover',
        width: '100%',
        padding: '1em',
        color: 'black',
    },
    button: {
        marginTop: '1em',
        backgroundColor: 'rgb(61, 61, 61)',
        fontSize: '1.1em',
        color: 'white',
        padding: '.25em .5em .25em .5em',
        border: 'none',
        borderRadius: '3px',
        fontWeight: 'normal',
    },
    hoverEffect: {
        cursor: 'pointer',
    },
    subtext: {
        fontSize: '.8em',
        fontWeight: 400,
    },
    svgContainer: {
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        paddingBottom: '100%',
        verticalAlign: 'top',
        overflow: 'hidden',
    },
    svgContentResponsive: {
        display: 'inline-block',
        position: 'absolute',
        top: '10px',
        left: 0,
    },
};
exports.default = styles;
