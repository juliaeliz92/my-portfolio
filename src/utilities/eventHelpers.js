import * as React from 'react';

export function useEventListener(eventName, handler, element = document) {
const savedHandler = React.useRef()

React.useEffect(() => {
	savedHandler.current = handler
}, [handler])

React.useEffect(() => {

	const eventListener = (event) => savedHandler.current(event)

	element.addEventListener(eventName, eventListener)

	return () => {
	element.removeEventListener(eventName, eventListener)
	}
}, [eventName, element, savedHandler])
}

export function setScrollLinkActive(sectionRef, navLinkRef, scrollRef) {
	const sections = sectionRef.childNodes;
	let linkNodes = [];
	navLinkRef.childNodes.forEach(node => linkNodes.push(node.children[0]))
	let scrollY = scrollRef.scrollTop;
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");
		let linkNode = linkNodes.find(node => node.hash === `#${sectionId}`);
		if(sectionId === 'about') console.log(scrollY, sectionTop, sectionHeight, sectionId, linkNode.className)
		if (scrollY > sectionTop && scrollY <= (sectionTop + sectionHeight)) {
			document.querySelector(`a[href*="${sectionId}"`).classList.add('active');
		} else {
			document.querySelector(`a[href*="${sectionId}"`).classList.remove('active');
		}
		if(sectionId === 'about') console.log(linkNode.className)
	});

}
