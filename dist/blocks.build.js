!function(e){function t(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,o){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,i){var o,n;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)){if(o.length){var r=i.apply(null,o);r&&e.push(r)}}else if("object"===n)if(o.toString===Object.prototype.toString)for(var a in o)s.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}var s={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(i.default=i,e.exports=i):(o=[],void 0!==(n=function(){return i}.apply(t,o))&&(e.exports=n))}()},function(e,t){e.exports=React},function(e,t,i){"use strict";function o(e){var t=e.tagName,i=e.className,o=e.style,s=e.title,r=e.children;return n(t,{className:i,style:o,title:s},r)}t.a=o;var n=wp.element.createElement},function(e,t,i){"use strict";t.a={tagName:{type:"string",default:"section"},title:{type:"string",default:null},enableSpacing:{type:"boolean",default:!1},spacingTop:{type:"number",default:60},spacingBottom:{type:"number",default:60},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},customTextColor:{type:"string"},bgImage:{type:"object",default:null},bgOptions:{type:"object",default:{repeat:!1,stretch:!0,fixed:!1,opacity:.5}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(5)},function(e,t,i){"use strict";var o=i(6),n=(i.n(o),i(7)),s=(i.n(n),i(8)),r=i(12),a=i(13),l=i(3),p=wp.blocks.registerBlockType,__=wp.i18n.__,h=wp.components.withFallbackStyles,c=wp.compose.compose,u=wp.blockEditor.withColors,d=window,g=d.getComputedStyle,f=h(function(e,t){var i=t.attributes.backgroundColor,o=e.querySelector('[contenteditable="true"]'),n=o?g(o):null;return{fallbackBackgroundColor:i||!n?null:n.backgroundColor}});p("acerspyro-ca/tab-block",{title:__("Tab"),icon:"index-card",category:"layout",keywords:[__("tab"),__("container")],attributes:l.a,supports:{align:["wide","full"]},edit:c([u("backgroundColor",{textColor:"color"}),f])(s.a),save:r.a,deprecated:a.a})},function(e,t){},function(e,t){},function(e,t,i){"use strict";var o=i(0),n=i.n(o),s=i(9),r=i(2),__=wp.i18n.__,a=wp.components,l=a.PanelBody,p=a.RangeControl,h=a.Button,c=a.ResponsiveWrapper,u=a.ToggleControl,d=a.SelectControl,g=wp.element.Fragment,f=wp.blockEditor,m=f.InspectorControls,b=f.InspectorAdvancedControls,w=f.InnerBlocks,v=f.PanelColorSettings,y=f.MediaUpload;t.a=function(e){var t=e.attributes,i=e.setAttributes,o=e.setBackgroundColor,a=e.toggleSelection,f=function(e){i({bgImage:{id:e.id,image:e.sizes.large||e.sizes.full}})},z=function(){i({bgImage:null})},x=function(e){i({title:e.target.value})},S=t.tagName,E=t.customBackgroundColor,k=t.customTextColor,C=t.resizeTopIsActive,R=t.resizeBottomIsActive,_=t.bgImage,N=t.bgOptions,B=t.enableSpacing;return wp.element.createElement(g,null,wp.element.createElement(m,null,wp.element.createElement(l,{title:__("Spacing"),initialOpen:!1},wp.element.createElement(u,{label:__("Enable spacing"),checked:!!t.enableSpacing,onChange:function(e){i({enableSpacing:e})}}),!!B&&wp.element.createElement(p,{label:__("Spacing top"),value:t.spacingTop,onChange:function(e){i({spacingTop:e})},min:0,max:200,step:10}),!!B&&wp.element.createElement(p,{label:__("Spacing bottom"),value:t.spacingBottom,onChange:function(e){i({spacingBottom:e})},min:0,max:200,step:10})),wp.element.createElement(l,{title:__("Background image"),initialOpen:!1},!_&&wp.element.createElement("div",null,wp.element.createElement(y,{title:__("Set background image"),onSelect:f,allowedTypes:["image"],modalClass:"editor-post-featured-image__media-modal",render:function(e){var t=e.open;return wp.element.createElement(h,{className:"editor-post-featured-image__toggle",onClick:t},__("Set background image"))}})),!!_&&wp.element.createElement(y,{title:__("Set background image"),onSelect:f,allowedTypes:["image"],value:_.id,modalClass:"editor-post-featured-image__media-modal",render:function(e){var t=e.open;return wp.element.createElement("div",{className:"editor-bg-image"},wp.element.createElement(h,{className:"editor-post-featured-image__preview",onClick:t},wp.element.createElement(c,{naturalWidth:_.image.width,naturalHeight:_.image.height},wp.element.createElement("img",{src:_.image.url,alt:__("BG Image")}))),wp.element.createElement(h,{onClick:t,isSecondary:!0,isLarge:!0},__("Replace image")),wp.element.createElement(h,{onClick:z,isLink:!0,isDestructive:!0},__("Remove background image")))}}),!!_&&wp.element.createElement("div",{className:"tab-bg-settings"},wp.element.createElement(p,{label:__("Opacity"),value:100*N.opacity,onChange:function(e){i({bgOptions:Object.assign({},N,{opacity:e/100})})},min:0,max:100,step:10}),wp.element.createElement(u,{label:__("Fixed Background"),checked:!!N.fixed,onChange:function(e){i({bgOptions:Object.assign({},N,{fixed:e})})}}),!N.fixed&&wp.element.createElement(u,{label:__("Stretch Background"),checked:!!N.stretch,onChange:function(e){i({bgOptions:Object.assign({},N,{stretch:e})})}}),!N.fixed&&!N.stretch&&wp.element.createElement(u,{label:__("Repeat Background"),checked:!!N.repeat,onChange:function(e){i({bgOptions:Object.assign({},N,{repeat:e})})}}))),wp.element.createElement(v,{initialOpen:!1,title:__("Colors"),colorSettings:[{label:__("Background Color"),value:E,onChange:function(e){o(e),i({customBackgroundColor:e})}},{label:__("Text Color"),value:k,onChange:function(e){i({customTextColor:e})}}]})),wp.element.createElement(b,null,wp.element.createElement(d,{label:"Tag",value:S,options:[{label:"section",value:"section"},{label:"header",value:"header"},{label:"footer",value:"footer"},{label:"div",value:"div"}],onChange:function(e){i({tagName:e})}})),wp.element.createElement(r.a,{tagName:S,className:e.className,style:{backgroundColor:E,color:k}},wp.element.createElement("div",{className:"title-box"},wp.element.createElement("span",null,__("Tab Title: ")),wp.element.createElement("input",{type:"text",className:"editor-plain-text block-editor-plain-text",placeholder:__("Title..."),onChange:x,value:t.title})),!!_&&wp.element.createElement("div",{className:n()("tab-bg",{bg__repeated:N.repeat,bg__stretched:N.stretch||N.fixed,bg__fixed:N.fixed}),style:{backgroundImage:_?"url("+_.image.url+")":void 0,opacity:N.opacity}}),!!B&&wp.element.createElement(s.a,{className:n()("spacing-box",{resizing:C}),size:{height:t.spacingTop},minHeight:"0",handleClasses:{top:"core-blocks-spacer__resize-handler-top",bottom:"core-blocks-spacer__resize-handler-bottom components-resizable-box__handle"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,o,n,s){i({resizeTopIsActive:!1,spacingTop:parseInt(t.spacingTop+s.height,10)}),a(!0)},onResizeStart:function(){i({resizeTopIsActive:!0}),a(!1)}}),wp.element.createElement(w,null),!!B&&wp.element.createElement(s.a,{className:n()("spacing-box",{resizing:R}),size:{height:t.spacingBottom},minHeight:"0",handleClasses:{top:"core-blocks-spacer__resize-handler-top",bottom:"core-blocks-spacer__resize-handler-bottom components-resizable-box__handle"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,o,n,s){i({spacingBottom:parseInt(t.spacingBottom+s.height,10),resizeBottomIsActive:!1}),a(!0)},onResizeStart:function(){a(!1),i({resizeBottomIsActive:!0})}})))}},function(e,t,i){"use strict";i.d(t,"a",function(){return y});var o=i(1),n=(i.n(o),i(10)),s=(i.n(n),i(11)),r=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(t,i)};return function(t,i){function __(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}(),a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)},l={width:"auto",height:"auto"},p=function(e,t,i){return Math.max(Math.min(e,i),t)},h=function(e,t){return Math.round(e/t)*t},c=function(e,t){return new RegExp(e,"i").test(t)},u=function(e){return Boolean(e.touches&&e.touches.length)},d=function(e){return Boolean((e.clientX||0===e.clientX)&&(e.clientY||0===e.clientY))},g=function(e,t,i){void 0===i&&(i=0);var o=t.reduce(function(i,o,n){return Math.abs(o-e)<Math.abs(t[i]-e)?n:i},0),n=Math.abs(t[o]-e);return 0===i||n<i?t[o]:e},f=function(e){return e=e.toString(),"auto"===e?e:e.endsWith("px")?e:e.endsWith("%")?e:e.endsWith("vh")?e:e.endsWith("vw")?e:e.endsWith("vmax")?e:e.endsWith("vmin")?e:e+"px"},m=function(e,t,i,o){if(e&&"string"===typeof e){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var n=Number(e.replace("%",""))/100;return t*n}if(e.endsWith("vw")){var n=Number(e.replace("vw",""))/100;return i*n}if(e.endsWith("vh")){var n=Number(e.replace("vh",""))/100;return o*n}}return e},b=function(e,t,i,o,n,s,r){return o=m(o,e.width,t,i),n=m(n,e.height,t,i),s=m(s,e.width,t,i),r=m(r,e.height,t,i),{maxWidth:"undefined"===typeof o?void 0:Number(o),maxHeight:"undefined"===typeof n?void 0:Number(n),minWidth:"undefined"===typeof s?void 0:Number(s),minHeight:"undefined"===typeof r?void 0:Number(r)}},w=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],v="__resizable_base__",y=function(e){function t(t){var i=e.call(this,t)||this;return i.ratio=1,i.resizable=null,i.parentLeft=0,i.parentTop=0,i.resizableLeft=0,i.resizableRight=0,i.resizableTop=0,i.resizableBottom=0,i.targetLeft=0,i.targetTop=0,i.appendBase=function(){if(!i.resizable||!i.window)return null;var e=i.parentNode;if(!e)return null;var t=i.window.document.createElement("div");return t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.transform="scale(0, 0)",t.style.left="0",t.style.flex="0 0 100%",t.classList?t.classList.add(v):t.className+=v,e.appendChild(t),t},i.removeBase=function(e){var t=i.parentNode;t&&t.removeChild(e)},i.ref=function(e){e&&(i.resizable=e)},i.state={isResizing:!1,width:"undefined"===typeof(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:"undefined"===typeof(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),i}return r(t,e),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||l},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){var e=0,t=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,o=this.resizable.offsetHeight,n=this.resizable.style.position;"relative"!==n&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:o,this.resizable.style.position=n}return{width:e,height:t}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sizeStyle",{get:function(){var e=this,t=this.props.size,i=function(t){if("undefined"===typeof e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&e.propsSize[t].toString().endsWith("%")){if(e.state[t].toString().endsWith("%"))return e.state[t].toString();var i=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/i[t]*100+"%"}return f(e.state[t])};return{width:t&&"undefined"!==typeof t.width&&!this.state.isResizing?f(t.width):i("width"),height:t&&"undefined"!==typeof t.height&&!this.state.isResizing?f(t.height):i("height")}},enumerable:!1,configurable:!0}),t.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var e=this.appendBase();if(!e)return{width:0,height:0};var t=!1,i=this.parentNode.style.flexWrap;"wrap"!==i&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%",e.style.minHeight="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return t&&(this.parentNode.style.flexWrap=i),this.removeBase(e),o},t.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},t.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},t.prototype.componentDidMount=function(){if(this.resizable&&this.window){var e=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==e.flexBasis?e.flexBasis:void 0})}},t.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},t.prototype.createSizeForCssProperty=function(e,t){var i=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||"undefined"!==typeof i&&"auto"!==i?e:"auto"},t.prototype.calculateNewMaxFromBoundary=function(e,t){var i,o,n=this.props.boundsByDirection,s=this.state.direction,r=n&&c("left",s),a=n&&c("top",s);if("parent"===this.props.bounds){var l=this.parentNode;l&&(i=r?this.resizableRight-this.parentLeft:l.offsetWidth+(this.parentLeft-this.resizableLeft),o=a?this.resizableBottom-this.parentTop:l.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(i=r?this.resizableRight:this.window.innerWidth-this.resizableLeft,o=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(i=r?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),o=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return i&&Number.isFinite(i)&&(e=e&&e<i?e:i),o&&Number.isFinite(o)&&(t=t&&t<o?t:o),{maxWidth:e,maxHeight:t}},t.prototype.calculateNewSizeFromDirection=function(e,t){var i=this.props.scale||1,o=this.props.resizeRatio||1,n=this.state,s=n.direction,r=n.original,a=this.props,l=a.lockAspectRatio,p=a.lockAspectRatioExtraHeight,h=a.lockAspectRatioExtraWidth,u=r.width,d=r.height,g=p||0,f=h||0;return c("right",s)&&(u=r.width+(e-r.x)*o/i,l&&(d=(u-f)/this.ratio+g)),c("left",s)&&(u=r.width-(e-r.x)*o/i,l&&(d=(u-f)/this.ratio+g)),c("bottom",s)&&(d=r.height+(t-r.y)*o/i,l&&(u=(d-g)*this.ratio+f)),c("top",s)&&(d=r.height-(t-r.y)*o/i,l&&(u=(d-g)*this.ratio+f)),{newWidth:u,newHeight:d}},t.prototype.calculateNewSizeFromAspectRatio=function(e,t,i,o){var n=this.props,s=n.lockAspectRatio,r=n.lockAspectRatioExtraHeight,a=n.lockAspectRatioExtraWidth,l="undefined"===typeof o.width?10:o.width,h="undefined"===typeof i.width||i.width<0?e:i.width,c="undefined"===typeof o.height?10:o.height,u="undefined"===typeof i.height||i.height<0?t:i.height,d=r||0,g=a||0;if(s){var f=(c-d)*this.ratio+g,m=(u-d)*this.ratio+g,b=(l-g)/this.ratio+d,w=(h-g)/this.ratio+d,v=Math.max(l,f),y=Math.min(h,m),z=Math.max(c,b),x=Math.min(u,w);e=p(e,v,y),t=p(t,z,x)}else e=p(e,l,h),t=p(t,c,u);return{newWidth:e,newHeight:t}},t.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var e=this.parentNode;if(e){var t=e.getBoundingClientRect();this.parentLeft=t.left,this.parentTop=t.top}}if(this.props.bounds&&"string"!==typeof this.props.bounds){var i=this.props.bounds.getBoundingClientRect();this.targetLeft=i.left,this.targetTop=i.top}if(this.resizable){var o=this.resizable.getBoundingClientRect(),n=o.left,s=o.top,r=o.right,a=o.bottom;this.resizableLeft=n,this.resizableRight=r,this.resizableTop=s,this.resizableBottom=a}},t.prototype.onResizeStart=function(e,t){if(this.resizable&&this.window){var i=0,o=0;if(e.nativeEvent&&d(e.nativeEvent)?(i=e.nativeEvent.clientX,o=e.nativeEvent.clientY):e.nativeEvent&&u(e.nativeEvent)&&(i=e.nativeEvent.touches[0].clientX,o=e.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){if(!1===this.props.onResizeStart(e,t,this.resizable))return}this.props.size&&("undefined"!==typeof this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),"undefined"!==typeof this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"===typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var n,s=this.window.getComputedStyle(this.resizable);if("auto"!==s.flexBasis){var r=this.parentNode;if(r){var l=this.window.getComputedStyle(r).flexDirection;this.flexDir=l.startsWith("row")?"row":"column",n=s.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var p={original:{x:i,y:o,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:a(a({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(e.target).cursor||"auto"}),direction:t,flexBasis:n};this.setState(p)}},t.prototype.onMouseMove=function(e){var t=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&u(e))try{e.preventDefault(),e.stopPropagation()}catch(e){}var i=this.props,o=i.maxWidth,s=i.maxHeight,r=i.minWidth,a=i.minHeight,l=u(e)?e.touches[0].clientX:e.clientX,p=u(e)?e.touches[0].clientY:e.clientY,c=this.state,d=c.direction,f=c.original,m=c.width,w=c.height,v=this.getParentSize(),y=b(v,this.window.innerWidth,this.window.innerHeight,o,s,r,a);o=y.maxWidth,s=y.maxHeight,r=y.minWidth,a=y.minHeight;var z=this.calculateNewSizeFromDirection(l,p),x=z.newHeight,S=z.newWidth,E=this.calculateNewMaxFromBoundary(o,s);this.props.snap&&this.props.snap.x&&(S=g(S,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(x=g(x,this.props.snap.y,this.props.snapGap));var k=this.calculateNewSizeFromAspectRatio(S,x,{width:E.maxWidth,height:E.maxHeight},{width:r,height:a});if(S=k.newWidth,x=k.newHeight,this.props.grid){var C=h(S,this.props.grid[0]),R=h(x,this.props.grid[1]),_=this.props.snapGap||0;S=0===_||Math.abs(C-S)<=_?C:S,x=0===_||Math.abs(R-x)<=_?R:x}var N={width:S-f.width,height:x-f.height};if(m&&"string"===typeof m)if(m.endsWith("%")){var B=S/v.width*100;S=B+"%"}else if(m.endsWith("vw")){var W=S/this.window.innerWidth*100;S=W+"vw"}else if(m.endsWith("vh")){var O=S/this.window.innerHeight*100;S=O+"vh"}if(w&&"string"===typeof w)if(w.endsWith("%")){var B=x/v.height*100;x=B+"%"}else if(w.endsWith("vw")){var W=x/this.window.innerWidth*100;x=W+"vw"}else if(w.endsWith("vh")){var O=x/this.window.innerHeight*100;x=O+"vh"}var T={width:this.createSizeForCssProperty(S,"width"),height:this.createSizeForCssProperty(x,"height")};"row"===this.flexDir?T.flexBasis=T.width:"column"===this.flexDir&&(T.flexBasis=T.height),Object(n.flushSync)(function(){t.setState(T)}),this.props.onResize&&this.props.onResize(e,d,this.resizable,N)}},t.prototype.onMouseUp=function(e){var t=this.state,i=t.isResizing,o=t.direction,n=t.original;if(i&&this.resizable){var s={width:this.size.width-n.width,height:this.size.height-n.height};this.props.onResizeStop&&this.props.onResizeStop(e,o,this.resizable,s),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:a(a({},this.state.backgroundStyle),{cursor:"auto"})})}},t.prototype.updateSize=function(e){this.setState({width:e.width,height:e.height})},t.prototype.renderResizer=function(){var e=this,t=this.props,i=t.enable,n=t.handleStyles,r=t.handleClasses,a=t.handleWrapperStyle,l=t.handleWrapperClass,p=t.handleComponent;if(!i)return null;var h=Object.keys(i).map(function(t){return!1!==i[t]?o.createElement(s.a,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:n&&n[t],className:r&&r[t]},p&&p[t]?p[t]:null):null});return o.createElement("div",{className:l,style:a},h)},t.prototype.render=function(){var e=this,t=Object.keys(this.props).reduce(function(t,i){return-1!==w.indexOf(i)?t:(t[i]=e.props[i],t)},{}),i=a(a(a({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var n=this.props.as||"div";return o.createElement(n,a({ref:this.ref,style:i,className:this.props.className},t),this.state.isResizing&&o.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},t.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},t}(o.PureComponent)},function(e,t){e.exports=ReactDOM},function(e,t,i){"use strict";i.d(t,"a",function(){return h});var o=i(1),n=(i.n(o),this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])})(t,i)};return function(t,i){function __(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(__.prototype=i.prototype,new __)}}()),s=this&&this.__assign||function(){return s=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)},r={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},a={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},l={width:"20px",height:"20px",position:"absolute"},p={top:s(s({},r),{top:"-5px"}),right:s(s({},a),{left:void 0,right:"-5px"}),bottom:s(s({},r),{top:void 0,bottom:"-5px"}),left:s(s({},a),{left:"-5px"}),topRight:s(s({},l),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:s(s({},l),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:s(s({},l),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:s(s({},l),{left:"-10px",top:"-10px",cursor:"nw-resize"})},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseDown=function(e){t.props.onResizeStart(e,t.props.direction)},t.onTouchStart=function(e){t.props.onResizeStart(e,t.props.direction)},t}return n(t,e),t.prototype.render=function(){return o.createElement("div",{className:this.props.className||"",style:s(s({position:"absolute",userSelect:"none"},p[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},t}(o.PureComponent)},function(e,t,i){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var n=i(0),s=i.n(n),r=i(2),a=wp.blockEditor,l=a.InnerBlocks,p=a.getColorClassName;t.a=function(e){var t=e.attributes,i=e.className,n=t.tagName,a=t.title,h=t.backgroundColor,c=t.customTextColor,u=t.customBackgroundColor,d=t.spacingBottom,g=t.spacingTop,f=t.bgImage,m=t.bgOptions,b=t.enableSpacing,w=p("background-color",h),v=s()(o({className:i},w,w)),y={backgroundColor:w?void 0:u,color:c||void 0,paddingBottom:b&&d?d:void 0,paddingTop:b&&g?g:void 0};return wp.element.createElement(r.a,{tagName:n,className:v||void 0,title:a,style:y},!!f&&wp.element.createElement("div",{className:s()("tab-bg",{bg__repeated:m.repeat,bg__stretched:m.stretch||m.fixed,bg__fixed:m.fixed}),style:{backgroundImage:f?"url("+f.image.url+")":void 0,opacity:m.opacity}}),wp.element.createElement(l.Content,null))}},function(e,t,i){"use strict";var o=i(14),n=i(3),s=i(15);i.n(s);t.a=[{attributes:Object(s.omit)(n.a,["tagName","enableSpacing","customTextColor"]),migrate:function(e,t){return[Object.assign({},e,{tagName:"section",enableSpacing:!0}),t]},save:o.a}]},function(e,t,i){"use strict";function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var n=i(0),s=i.n(n),r=wp.blockEditor,a=r.InnerBlocks,l=r.getColorClassName;t.a=function(e){var t=e.attributes,i=e.className,n=t.backgroundColor,r=t.customTextColor,p=t.customBackgroundColor,h=t.spacingBottom,c=t.spacingTop,u=t.bgImage,d=t.bgOptions,g=l("background-color",n),f=s()(o({className:i},g,g)),m={backgroundColor:g?void 0:p,color:r||void 0,paddingBottom:h||void 0,paddingTop:c||void 0};return wp.element.createElement("section",{className:f||void 0,style:m},!!u&&wp.element.createElement("div",{className:s()("section-bg",{bg__repeated:d.repeat,bg__stretched:d.stretch||d.fixed,bg__fixed:d.fixed}),style:{backgroundImage:u?"url("+u.image.url+")":void 0,opacity:d.opacity}}),wp.element.createElement(a.Content,null))}},function(e,t){e.exports=lodash}]);