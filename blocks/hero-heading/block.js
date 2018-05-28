const { registerBlockType } = wp.blocks,
  { __ } = wp.i18n,
  { PlainText, RichText } = wp.editor;

registerBlockType('carrieforde-app/hero-heading', {
  title: __('Hero Heading'),

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
    const { attributes, className, setAttributes } = props;
    return (
      <section className={className}>
        <PlainText
          onChange={title =>
            setAttributes({
              title
            })
          }
          value={attributes.title}
          placeholder="Hero Title"
          className="hero-block"
        />
        <RichText
          placeholder="Hero Text"
          multiline="p"
          className="hero-block__text"
          value={attributes.content}
          onChange={content => setAttributes({ content })}
        />
        <RichText
          placeholder="Hero Footer"
          className="hero-block__footer"
          value={attributes.footer}
          onChange={footer => setAttributes({ footer })}
        />
      </section>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: props => {
    const { attributes } = props;
    return (
      <section className="hero-heading full-width">
        <h1 className="hero-heading__title">{attributes.title}</h1>
        <div className="hero-heading__text">{attributes.content}</div>
        <footer className="hero-heading__footer">{attributes.footer}</footer>
      </section>
    );
  }
});
