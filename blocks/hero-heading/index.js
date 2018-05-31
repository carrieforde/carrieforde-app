import SectionWrapper from '../../components/SectionWrapper';
import SectionHeader from '../../components/SectionHeader';

const { registerBlockType } = wp.blocks,
  { PlainText, RichText } = wp.editor,
  { __ } = wp.i18n;

registerBlockType('carrieforde-app/hero-heading', {
  title: __('Hero Heading'),
  icon: 'heart',
  category: 'widgets',
  supports: {
    html: false
  },
  attributes: {
    title: {
      source: 'text',
      selector: '.cfa-block__title'
    },
    content: {
      source: 'children',
      selector: '.cfa-block__content'
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit: (props: { attributes: Object, className: string, setAttributes: Function }) => {
    const { attributes, className, setAttributes } = props,
      onChangeTitle = message => setAttributes({ title: message }),
      onChangeContent = message => setAttributes({ content: message });

    return (
      <SectionWrapper className={`cfa-block--hero-heading ${className}`}>
        <PlainText onChange={onChangeTitle} value={attributes.title} placeholder="Hero Title" className="hero-block" />
        <RichText
          placeholder="Hero Text"
          multiline="p"
          className="hero-block__text"
          value={attributes.content}
          onChange={onChangeContent}
        />
      </SectionWrapper>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: (props: { attributes: Object }) => {
    const { attributes } = props;
    return (
      <SectionWrapper className={`cfa-block--hero-heading full-width`} wrapper>
        <SectionHeader title={attributes.title} />
        <div className="cfa-block__content">{attributes.content}</div>
      </SectionWrapper>
    );
  }
});
