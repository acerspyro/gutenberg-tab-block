/**
 * BLOCK: tab-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
import classnames from 'classnames'
import Tab from './tab-tag'

const {
	InnerBlocks,
	getColorClassName,
} = wp.blockEditor;

export default ( { attributes, className } ) => {

	const { 
		tagName,
		title,
		backgroundColor,
		customTextColor,
		customBackgroundColor,
		spacingBottom,
		spacingTop,
		bgImage,
		bgOptions,
		enableSpacing
	} = attributes;
	const backgroundClass = getColorClassName( 'background-color', backgroundColor );
	const classes = classnames(
		{
			className,
			[backgroundClass]: backgroundClass
		}
	)

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: customTextColor ? customTextColor : undefined,
		paddingBottom: (!! enableSpacing) && spacingBottom ? spacingBottom : undefined,
		paddingTop: (!! enableSpacing) && spacingTop ? spacingTop : undefined,
	}
	return (
		<Tab tagName={tagName} className={ classes ? classes : undefined } title={ title } style={ styles }>
			{ !! bgImage && <div
				className={ classnames( 
					'tab-bg', {
						'bg__repeated': bgOptions.repeat,
						'bg__stretched': bgOptions.stretch || bgOptions.fixed,
						'bg__fixed': bgOptions.fixed,
					} ) }
				style={ {
					backgroundImage: bgImage ? 'url(' + bgImage.image.url + ')' : undefined,
					opacity: bgOptions.opacity
				} }
			/> }
			<InnerBlocks.Content />
		</Tab>
	);
}