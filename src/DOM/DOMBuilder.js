/*
Expected structure of 'DOMObject'
const DOMObject =
     {
        element:"*HTMLTag*",
        className:[*Array of Strings*],
        textContent: "*Text To be Displayed*",
        attributes:{*AttributeName*: "value"},
        childNodes: [{DOMObject},{DOMObject},...],//Contains child elements in same format 
    };
*/

function DOMBuilder(DOMObject, parentNode=null) {
        const element = document.createElement(DOMObject.element);
        if(DOMObject.className)
            element.classList.add(...DOMObject.className);
        if(DOMObject.textContent)
            element.textContent = DOMObject.textContent;
        for(const attr in DOMObject.attributes)
            element.setAttribute(attr, DOMObject.attributes[attr]);
        
        if(DOMObject.childNodes)
        DOMObject.childNodes.forEach((object)=>{
                DOMBuilder(object, element);
            });

        if(parentNode){
            parentNode.appendChild(element);
        }
        else
            document.body.appendChild(element);
}

export default DOMBuilder;