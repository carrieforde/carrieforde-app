import React, { Component } from 'react';

const { CheckboxControl, QueryControls } = wp.components,
  { __ } = wp.i18n;

class SelectProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      categories: [],
      selectedCats: [],
      selectedProjects: []
    };

    this.selectedCheckboxes = new Set();

    this.getCategories = this.getCategories.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.getCategories(this.updateCategories);
  }

  getCategories(cb) {
    fetch(`http://fordeapp.test/wp-json/wp/v2/project-category`)
      .then(response => response.json())
      .then(myJson => cb(myJson));
  }

  updateCategories(data) {
    const { categories } = this.state;
    let cats;

    cats = data.map(cat => ({ id: cat.id, name: cat.name, checked: false }));

    this.setState({ categories: cats });
  }

  onChangeCheck(key) {
    const { categories } = this.state;

    console.log(key); // eslint-disable-line no-console
  }

  toggleCheckbox(key) {
    if (this.selectedCheckboxes.has(key)) {
      this.selectedCheckboxes.delete(key);
    } else {
      this.selectedCheckboxes.add(key);
    }

    console.log(this.selectedCheckboxes); // eslint-disable-line no-console
  }

  render() {
    const { categories } = this.state;
    let cats = [{ id: 0, name: __('Bov Projects') }],
      output;

    if (0 < categories.length) {
      output = categories.map((category, index) => (
        <CheckboxControl
          key={category.id}
          label={category.name}
          checked={category.checked}
          onChange={this.toggleCheckbox}
        />
      ));
    } else {
      output = __('Sorry, no posts found.');
    }

    return (
      <div>
        <QueryControls />
        {output}
        Projects go here.
      </div>
    );
  }
}

export default SelectProjects;
