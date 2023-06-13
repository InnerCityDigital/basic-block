import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, ToggleControl, ColorPalette, PanelRow } from '@wordpress/components';
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

	const setBackgroundColor = (newValue) => {
		setAttributes({ backgroundColor: newValue });
		console.log(attributes);
	}

	const setTextColor = (newValue) => {
		setAttributes({ textColor: newValue });
		console.log(attributes);
	}

	const panelRandomToggle = (newValue) => {
		setAttributes({ panelRandom: !panelRandom });
	}

	const { text, alignment, backgroundColor, textColor, panelRandom } = attributes;

	return (

		<>

		<InspectorControls>

			<PanelColorSettings

	            title="Color Settings"
	            disableCustomColors={false}
	            colorSettings={ [
	                {
	                    value: backgroundColor,
	                    onChange: setBackgroundColor,
	                    label: __( 'Background Color' ),
	                },
	                {
	                    value: textColor,
	                    onChange: setTextColor,
	                    label: __( 'Text Color' ),
	                },
	            ] }
	            help="test"
	        >

			</PanelColorSettings>


			<PanelBody title="Random fields">

				<PanelRow>
					<ToggleControl
						label="Toggle me"
						checked={panelRandom}
						onChange={panelRandomToggle}
					/>
				</PanelRow>

				<TextControl label="Heading" value={ text } placeholder="Type something" onChange={setText} help="Some further information" />

				<TextareaControl label="Text area" onChange={setText} value={text} />

				<ToggleControl label="Toggle" />

			</PanelBody>
			

		</InspectorControls>

		<BlockControls>

			<AlignmentToolbar 
			value={ alignment }
			onChange={ setAlignment } 
			/>

		</BlockControls>

		<RichText 
			{ ...useBlockProps({
				className: 'text-' + alignment,
				style: {
					backgroundColor: backgroundColor,
					color: textColor
				}
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