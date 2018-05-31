import React, { Component } from 'react';
import SectionWrapper from './SectionWrapper';

type Props = {
  attributes: Object,
  setAttributes: Function
};

const { PlainText, RichText } = wp.editor,
  { Button } = wp.components;

class List extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      itemTitle: '',
      itemContent: '',
      listItems: []
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
  }

  changeTitle(message) {
    const { itemTitle } = this.state;
    this.setState({ itemTitle: message });
  }

  changeContent(message) {
    const { itemContent } = this.state;
    this.setState({ itemContent: message });
  }

  addItem() {
    const { listItems, itemTitle, itemContent } = this.state;

    this.setState({ listItems: [...listItems, { title: itemTitle, content: itemContent }] }, this.updateAttributes());

    this.changeTitle('');
    this.changeContent('');
  }

  updateAttributes() {
    const { listItems } = this.state,
      { setAttributes } = this.props;
    setAttributes({ items: listItems });
  }

  render() {
    const { itemTitle, itemContent, listItems } = this.state;

    let title, content, list;

    if (0 < listItems.length) {
      list = (
        <ol className="list">
          {listItems.map((item, index) => (
            <li key={index} className="list__item">
              <h3>{item.title}</h3>
              <div>{item.content}</div>
            </li>
          ))}
        </ol>
      );
    }

    return (
      <SectionWrapper onBlur={this.updateAttributes}>
        {list}

        <form className="itemDetails">
          <PlainText value={itemTitle} onChange={this.changeTitle} placeholder="Grid item title" />
          <RichText value={itemContent} onChange={this.changeContent} placeholder="Grid item content" />
        </form>

        <Button onClick={this.addItem}>Add Item</Button>
        <Button onClick={this.updateAttributes}>Done</Button>
      </SectionWrapper>
    );
  }
}

export default List;
