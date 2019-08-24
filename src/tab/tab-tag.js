const { createElement } = wp.element;
export default function Tab({tagName, className, style, title, children}){ 

	return createElement(
		tagName,
		{
			className: className,
			style: style,
			title: title
		},
		children
	)
}
