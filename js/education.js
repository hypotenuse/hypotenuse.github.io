


const prepareTimelineContainer = (lineStyle, circleStyle) => {
    
    const [nodes, timelineContainerAttribute, SVGElementNS] = [document.querySelectorAll('*'), 'data-timeline-container', 'http://www.w3.org/2000/svg']
    
    const create = (element, ns) => ns ? document.createElementNS(ns, element) : document.createElement(element)

    const rand = () => String(Math.random()).split('.')[1]

    const createSVGLine = (identifier, x1, y1, x2, y2, style) => {
        const SVGLine = create('line', SVGElementNS)
        if (identifier == undefined) identifier = `timelineline-${rand()}`
        SVGLine.id = identifier
        SVGLine.setAttribute('id', identifier)
        SVGLine.setAttribute('x1', x1)
        SVGLine.setAttribute('y1', y1)
        SVGLine.setAttribute('x2', x2)
        SVGLine.setAttribute('y2', y2)
        SVGLine.setAttribute('style', style)
        return SVGLine
    }

    const createSVGCircle = (identifier, cx, cy, r, fill) => {
        const SVGCircle = create('circle', SVGElementNS)
        if (identifier == undefined) identifier = `timelinecircle-${rand()}`
        SVGCircle.id = identifier
        SVGCircle.setAttribute('id', identifier)
        SVGCircle.setAttribute('cx', cx)
        SVGCircle.setAttribute('cy', cy)
        SVGCircle.setAttribute('r', r)
        SVGCircle.setAttribute('fill', fill)
        return SVGCircle
    }

    const initTimeline = container => {
        const [timelineDataAttribute, hoverEventBackground] = ['data-timeline-data', '#4a86e8']
        const [containerWidth, containerHeight] = [container.getAttribute('data-width'), container.getAttribute('data-height')]
        let timelineDataElement = undefined
        for (let i = 0, children = container.children; i < children.length; i++) {
            if (children[i].hasAttribute(timelineDataAttribute)) {
                timelineDataElement = children[i]
                break
            }
        }
        const SVGElement = create('svg', SVGElementNS)
        SVGElement.setAttribute('width', containerWidth - 60)
        SVGElement.setAttribute('height', containerHeight)
        SVGElement.appendChild(createSVGLine(undefined, 0, containerHeight / 2, containerWidth, containerHeight / 2, lineStyle))
        
        for (let i = 0, children = timelineDataElement.children; children.length > 0; i++) {
            const [offsetX, offsetY, isOdd] = [15, 5, !!(i & 1)]
            const timelineBox = children[0]
            const timelineBoxWidth = Number(timelineBox.getAttribute('data-width'))
            const timelineBoxPositionX = Number(timelineBox.getAttribute('data-x-position'))
            timelineBox.style.position = 'absolute'
            timelineBox.style.width = `${timelineBoxWidth}px`
            container.appendChild(timelineBox)
            let [SVGLineElement, SVGCircleElement] = []
            if (isOdd) {
                timelineBox.style.top = `${containerHeight - timelineBox.offsetHeight - offsetY}px`
                timelineBox.style.left = `${timelineBoxPositionX + offsetX}px`
                SVGElement.appendChild(SVGLineElement = createSVGLine(undefined, timelineBoxPositionX, containerHeight / 2, timelineBoxPositionX, containerHeight, lineStyle))
            }
            else {
                timelineBox.style.top = `${offsetY}px`
                timelineBox.style.left = `${timelineBoxPositionX + offsetX}px`
                SVGElement.appendChild(SVGLineElement = createSVGLine(undefined, timelineBoxPositionX, 0, timelineBoxPositionX, containerHeight / 2, lineStyle))
            }
            SVGElement.appendChild(SVGCircleElement = createSVGCircle(undefined, timelineBoxPositionX, containerHeight / 2, circleStyle.r, circleStyle.fill))

            timelineBox.addEventListener('mouseenter', event => {
                SVGCircleElement.setAttribute('fill', hoverEventBackground)

            })
            timelineBox.addEventListener('mouseleave', event => {
                SVGCircleElement.setAttribute('fill', circleStyle.fill)
            })
        }
        container.appendChild(SVGElement)
    }

    for (let i = 0; i < nodes.length; i++) if (nodes[i].hasAttribute(timelineContainerAttribute)) initTimeline(nodes[i])
}

prepareTimelineContainer('stroke:#cccccc;stroke-width:2', {r: 6, fill: '#aaaaaa'})