import * as React from 'react';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import * as eventHelpers from './../utilities/eventHelpers';

export default function SpotLightCursor({
    outerAlpha = 0.4,
    innerSize = 8,
    outerSize = 8,
    outerScale = 5,
    innerScale = 0.7
}) {
    const cursorOuterRef = React.useRef();
    const cursorInnerRef = React.useRef();
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [ innerTransform, setInnerTransform ] = React.useState(null);
    const [ outerTransform, setOuterTransform ] = React.useState(null);
    const [ innerOpacity, setInnerOpacity ] = React.useState(null);
    const [isVisible, setIsVisible] = React.useState(true);
    const [isActive, setIsActive] = React.useState(false);
    const [isActiveClickable, setIsActiveClickable] = React.useState(false);
    let endX = React.useRef(0);
    let endY = React.useRef(0);
    const { useEventListener } = eventHelpers;

    const onMouseMove = React.useCallback(({ clientX, clientY }) => {
        setCoords({ x: clientX, y: clientY });
        endX.current = clientX;
        endY.current = clientY;
    }, []);

    const animateOuterCursor = React.useCallback(
        (time) => {
            if (previousTimeRef.current !== undefined) {
                coords.x += (endX.current - coords.x) / 8
                coords.y += (endY.current - coords.y) / 8
                cursorOuterRef.current.style.top = coords.y + 'px';
                cursorOuterRef.current.style.left = coords.x + 'px';
            }
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animateOuterCursor)
        },
        [requestRef] // eslint-disable-line
    );

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animateOuterCursor)
    }, [animateOuterCursor]);

    const onMouseDown  = React.useCallback(() => setIsActive(true), []);
    const onMouseUp    = React.useCallback(() => setIsActive(false), []);
    const onMouseEnter = React.useCallback(() => setIsVisible(true), []);
    const onMouseLeave = React.useCallback(() => setIsVisible(false), []);

    useEventListener('mousemove', onMouseMove, document);
    useEventListener('mousedown', onMouseDown, document);
    useEventListener('mouseup', onMouseUp, document);
    useEventListener('mouseenter', onMouseEnter, document);
    useEventListener('mouseleave', onMouseLeave, document);

    React.useEffect(() => {
        if (isActive) {
            setInnerTransform(`scale(${innerScale})`);
            setOuterTransform(`scale(${outerScale})`);
            setInnerOpacity(0.2);
        } else {
            setInnerTransform('scale(1)');
            setOuterTransform('scale(1)');
            setInnerOpacity(1);
        }
    }, [innerScale, outerScale, isActive]);

    React.useEffect(() => {
        if (isActiveClickable) {
            cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`
            cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`
        }
    }, [innerScale, outerScale, isActiveClickable]);

    React.useEffect(() => {
        if (isVisible) {
            cursorInnerRef.current.style.opacity = 1
            cursorOuterRef.current.style.opacity = 1
        } else {
            cursorInnerRef.current.style.opacity = 0
            cursorOuterRef.current.style.opacity = 0
        }
    }, [isVisible]);

    React.useEffect(() => {
        const clickable = document.querySelectorAll('a', 'section.experience-tile')
        console.log(clickable)
        clickable.forEach((el) => {
            el.style.cursor = 'none'

            el.addEventListener('mouseover', () => {
                setIsActive(true)
            })
            el.addEventListener('click', () => {
                setIsActive(true)
                setIsActiveClickable(false)
            })
            el.addEventListener('mousedown', () => {
                setIsActiveClickable(true)
            })
            el.addEventListener('mouseup', () => {
                setIsActive(true)
            })
            el.addEventListener('mouseout', () => {
                setIsActive(false)
                setIsActiveClickable(false)
            })
        })

        return () => {
            clickable.forEach((el) => {
                el.removeEventListener('mouseover', () => {
                    setIsActive(true)
                })
                el.removeEventListener('click', () => {
                    setIsActive(true)
                    setIsActiveClickable(false)
                })
                el.removeEventListener('mousedown', () => {
                    setIsActiveClickable(true)
                })
                el.removeEventListener('mouseup', () => {
                    setIsActive(true)
                })
                el.removeEventListener('mouseout', () => {
                    setIsActive(false)
                    setIsActiveClickable(false)
                })
            })
        }
    }, [isActive]);

    const cursorStyles = {
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 999,
        transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out'
    };

    const CursorOuter = styled('div')(({ theme }) => ({
        ...cursorStyles,
        width: outerSize,
        height: outerSize,
        transform: innerTransform,
        backgroundColor: theme.palette.secondary.light, 
        opacity: outerAlpha,
    }));

    const CursorInner = styled('div')(({theme}) => ({
        ...cursorStyles,
        width: innerSize,
        height: innerSize,
        top: coords.y,
        left: coords.x,
        transform: outerTransform,
        backgroundColor: theme.palette.common.black,
        opacity: innerOpacity
    }));

    return (
        <React.Fragment>
            <CursorOuter ref={cursorOuterRef} />
            <CursorInner ref={cursorInnerRef} />
        </React.Fragment>
    )
}

SpotLightCursor.propTypes = {
    outerAlpha: PropTypes.number,
    innerSize: PropTypes.number,
    outerSize: PropTypes.number,
    outerScale: PropTypes.number,
    innerScale: PropTypes.number
}