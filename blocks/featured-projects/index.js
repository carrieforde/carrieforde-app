// @flow
import SelectProjects from '../../components/SelectProjects';

const { registerBlockType } = wp.blocks,
  { PlainText, RichText } = wp.editor,
  { withAPIData, QueryControls } = wp.components,
  { __ } = wp.i18n;

registerBlockType('carrieforde-app/featured-projects', {
  title: __('Featured Projects'),
  icon: 'heart',
  category: 'widgets',
  supports: {
    html: false
  },
  // attributes: {
  //   title: {
  //     type: 'string',
  //     source: 'text',
  //     selector: '.cfa-block__title'
  //   },
  //   items: {
  //     type: 'array',
  //     source: 'query',
  //     selector: '.grid-list__item',
  //     query: {
  //       title: { source: 'text', selector: '.grid-list__title' },
  //       content: { source: 'children', selector: '.grid-list__content' }
  //     }
  //   }
  // },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit: props => <SelectProjects {...props} />,

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: () => null
});
