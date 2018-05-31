// @flow
import SectionWrapper from '../../components/SectionWrapper';
import SectionHeader from '../../components/SectionHeader';
import List from '../../components/List';

const { registerBlockType } = wp.blocks,
  { PlainText, RichText } = wp.editor,
  { Button } = wp.components,
  { __ } = wp.i18n;

registerBlockType('carrieforde-app/grid-list', {
  title: __('Grid List'),
  icon: 'heart',
  category: 'widgets',
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.cfa-block__title'
    },
    items: {
      type: 'array',
      source: 'query',
      selector: '.grid-list__item',
      query: {
        title: { source: 'text', selector: '.grid-list__title' },
        content: { source: 'children', selector: '.grid-list__content' }
      }
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
  edit: (props: Object) => {
    const { attributes, setAttributes } = props;
    return (
      <SectionWrapper>
        <h2>
          <PlainText
            placeholder="Section Title"
            value={attributes.title}
            onChange={message => setAttributes({ title: message })}
          />
        </h2>
        <List {...props} />
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
  save: (props: { attributes: { items: Array<Object> } }) => {
    const { attributes } = props;

    let list;

    if (attributes.items && 0 < attributes.items.length) {
      list = (
        <ol className="grid-list">
          {attributes.items.map((item, index) => (
            <li key={index} className="grid-list__item">
              <h3 className="grid-list__title">{item.title}</h3>
              <div className="grid-list__content">{item.content}</div>
            </li>
          ))}
        </ol>
      );
    }

    return (
      <SectionWrapper className={`cfa-block--grid-list`}>
        <SectionHeader title={attributes.title} />
        {list}
      </SectionWrapper>
    );
  }
});
