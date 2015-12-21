"use strict";

function notIn (key, val) {
  return !(key in val);
}

function couple (node) {
  let componentName = node.props.name;
  if (!componentName) {
    const constructorName = node.constructor.name;
    componentName = constructorName[0].toLowerCase() +
      constructorName.slice(1);
  }
  if (!('components' in this)) {
    this.components = {};
  }
  if (node && notIn(componentName, this.components)) {
    this.components[componentName] = node;
  }
}

module.exports = couple;