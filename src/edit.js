import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	const { text } = attributes;

	return (


		<>


		<BlockControls controls={[

			{
				title: 'Button 1',
				icon: 'admin-generic',
				isActive: false,
				onClick: () => console.log('Button 1 clicked')
			},
			{
				title: 'Button 2',
				icon: 'admin-generic',
				isActive: false,
				onClick: () => console.log('Button 2 clicked')
			}

		]}>




		{ text && 

		<ToolbarGroup>

			<ToolbarButton 
				title="Align left"
				icon="editor-alignleft"
				onClick={ () => console.log('Align left') }
			 />

			 <ToolbarButton 
			 	title="Align right"
			 	icon="editor-aligncenter"
			 	onClick={ () => console.log('Align right') }
			  />

			  <ToolbarButton 
			  	title="Align left"
			  	icon="editor-alignright"
			  	onClick={ () => console.log('Align right') }
			   />

			   <ToolbarDropdownMenu 
			   icon="arrow-down-alt2" 
			   label="More alignment options" 
			   controls={[
			   {
			   	title: 'Align wide',
			   	icon: 'align-wide'
			   },
			   {
			   	title: 'Align full',
			   	icon: 'align-full-width'
			   }

			   ]}
			   />

		</ToolbarGroup>

	}



		</BlockControls>

		<RichText 
			{ ...useBlockProps() } 
			placeholder="Write something.."
			tagName="h4"
			value={text}
			allowedFormats={ ['core/bold'] }
			onChange={ (value) => { setAttributes({ text: value }) } }
		/>

		</>


	);
} 