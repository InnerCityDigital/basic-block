import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
//import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {


	const setText = (newValue) => {
		setAttributes({ text: newValue });
		console.log(attributes);
	}

	const setAlignment = (newValue) => {
		setAttributes({ alignment: newValue });
		console.log(attributes);
	}

	const { text, alignment } = attributes;

	return (

		<>

		<BlockControls>

			<AlignmentToolbar 
			value={ alignment }
			onChange={ setAlignment } 
			/>

		</BlockControls>

		<RichText 
			{ ...useBlockProps({
				className: 'text-' + alignment
			}) } 
			placeholder="Write something.."
			tagName="h4"
			value={ text }
			allowedFormats={ ['core/bold'] }
			onChange={ setText }
			//style={{ textAlign: alignment }}
		/>

		</>


	);
} 