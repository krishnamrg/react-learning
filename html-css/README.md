# css selectors
 * id selector
 * class selector
 * element selector
 * global selector
 * group selector
 * attribute selector
 * descendent selector

 ## id selector
    * #id {
        props:prop;
    }
## class selector
    * .class-name{
        props:props;
    }
## element selector
    * HtmlElementName{
        props:props;
    }
## global selector
    * *{
        props:props;
    }
## group selector
    * HtmlElementName1, HtmlElementName2, ..{
        props:prop;
    }
## attribute selector
    * HtmlElement[attribute-property="attribute-value"]{
        props:prop;
    }
    ** example of attribute selector
    a[href="https://www.google.com"]{
        background-color:#fefefe;
    }
    (Or)
    a[href*="https://www.google.com"]{ //signifies contains
        prop:value;
    }
## descendent selector
    HtmlElement1 Htmlelement2 {
        ....
    }
    (Or)
    HtmlElement .class-name{
        ....
    }
    (Or)
    HtmlElement #id-name{
        ....
    }
    (Or)
    *** A combination of all of the above.