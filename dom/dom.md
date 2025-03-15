### Introduction to basic DOM methods - dcode - youtube channel for reference

1.	element.setAttribute(“attributename”, “attributevalue”) – you can add css too.
2.	element.removeAttribute(“attributename”)
3.  element.removeAttributeNode()
4.	element.getAttribute(“attributename”)
5.  element.getAttributeNames() - doesn't take any parameter, returns attributes list of array of strings.
6.  element.getAttributeNode(attributename) - returns both name and value of the attributes.
7.	element.hasAttribute(“attributename”)
8.  element.hasAttributes() - doesn't take any parameters
9.  element.toggleAttribute() - works only for boolean attribute like disabled, enabled, checked etc.

9.	Adding a class/multiple classes to HTML Elements - classList, className, setAttribute, spread operator

10.	insertAdjacentElement(position, variable), insertAdjacentHTML(position, HTML as string), insertAdjacentText(position, normal string)

11.	parentNode.insertBefore(newNode, existingNode) - if you don't pass second parameter, what happend? [node type can be anything]

12.	append/prepend(ChildNode1, ChildNode2...ChildNodeN) - can be any node, DOMString Objects or DocumentFragments Object
13. appenChild(ChildNode) - can be any node type

14.	parentNode.replaceChild(newChildNode, existingChildNode), parentNode.replaceChildren(child1, child2...childN), 
    elementToReplace.replaceWith(child1, child2...childN)

15.	parentNode.remove(), parentNode.removeChild(ExistingChildNode)

16.	matches(), closest()
17.	createElement(), createTextNode(), createComments(), createFragments(), createAttribute()
18. nodeToClone.cloneNode(true/false)
19. before(), after() - takes as many child as it can hold
20. How many ways are there to create HTML options element in DOM
21. How to check whether the radio button or checkbox is checked/not.
22. How to access form elements using document.forms.[name_attribute_of_specific_element]

### Selecting the HTML Elements

1.	document.getElementById(“id”)
2.	document.getElementsByClassName(“classname”)
3.	document.getElementsByTagName(“tagname”)
4.	document.querySelector("any css selectors")
5.  document.querySelectorAll("any css selectors)
6.	document.getElementsByName("name attribute")

### Introduction to basic DOM Properties

1. innerHTML, innerText
2. outerHTML, outerText
3. textContent
4. dataset property
5. firstElementChild, lastElementChild, firstChild, lastChild
6. nextElementSibling, previousElementSibling, nextSibling, previousSibling
7. children, childNodes, parentElement, parentNode, children.length, childElementCount

### Introduction to Nodes

1. What is node?
2. Three main properties of node - nodeType, nodeName, nodeValue, [extra: tagName]
3. Types of Node - 12 but only the following are important: Element, Attribute, Text, Comment, Document, DocumentType 
4. what is $0, when we click on any HTML Element in Dev Tool?
5. Difference between tagName & nodeName ?
6. Difference between Static vs. Live Collections vs. Element Node?
7. Traversing through the parentNode, childNodes
8. What is Critical Rendering Path?
9. What is CSSOM?
10. What is Render Tree?

### Introduction to HTML Form Element & Events (youtube - Leela web dev channel, cyberdude networks)

1. What is event and types of events?
    i. Multiple events declaration is possible in an element but it should be different types of event(like onmouserover,onclick etc).
        -- if an element has same type - only first event will be triggered.(inline, inline-properties.)
    ii. Multiple events declaration possible using all the methods and must be of same type.
2. Event Listener - 3 ways to attach event listeners to an element [Inline Event Listeners, Inline Properties & Event Listener]
3. Event Handler
4. Event Objects
5. element.value vs element.getAttribute("value")
6. element.placeholder
7. HTML Input Handling
 - **Click Events:** onclick, ondblclick
 - **Keyboard Interaction Events:** onkeyup, onkeydown, `onkeypress (deprecated in the modern browers like Chrome and Firefox)`
 - **Mouse Events:** onmouseover, focus,input,onchange, cut/copy/paste, focus(), blur()
8. HTML Select Handling - selectedIndex, add(newOptionElement, indexToAdd), remove(index)
9. HTML Radio/Checkbox Element - checked, when we will get 'on' a value.
10. removeEventListener, once keyword as a 3rd parameter in addEventListener.

event.type, event.target
event.target.name
event.target.value
current.value
current.name
new.target

Common Operations in DOM
*************************
Event Delegation
Event Propogation
Event Capturing
Event Bubbling
preventDefault()
stopPropogation()