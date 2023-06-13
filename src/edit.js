import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { text } = attributes;

	return (
		<RichText 
			{ ...useBlockProps() } 
			placeholder="Write something.."
			tagName="h4"
			value={text}
			allowedFormats={ ['core/bold'] }
			onChange={ (value) => { setAttributes({ text: value }) } }
		/>
	);
}
 