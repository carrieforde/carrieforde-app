// @flow
import SectionWrapper from '../../components/SectionWrapper';
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
    items: {
      source: 'query',
      selector: '.grid-list',
      query: {
        title: { source: 'text', selector: '.grid-item__title' },
        content: { source: 'children', selector: '.grid-item__content' }
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
    return <List {...props} />;
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
              <h3 className="grid-item__title">{item.title}</h3>
              <div className="grid-item__content">{item.content}</div>
            </li>
          ))}
        </ol>
      );
    }

    return <SectionWrapper className={`cfa-block--grid-list`}>{list}</SectionWrapper>;
  }
});
