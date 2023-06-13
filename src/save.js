import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( {attributes} ) {

	const { text, alignment } = attributes;

	return (
		<RichText.Content
			{ ...useBlockProps.save({
				className: 'text-' + alignment
			}) } 
			tagName="h4" 
			value={text}
		/>
	);
}