import GetPosts from '../../components/getPosts';

const { registerBlockType } = wp.blocks,
  __ = wp.i18n.__;

registerBlockType('carrieforde-app/projects', {
  title: __('Projects'),

  icon: 'heart',

  category: 'widgets',

  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit: props => {
    console.log(props); // eslint-disable-line no-console
    return <GetPosts />;
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: () => <div>I'm some text!</div>
});
