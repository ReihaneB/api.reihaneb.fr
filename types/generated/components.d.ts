import type { Schema, Attribute } from '@strapi/strapi';

export interface ArrayArrayOfObjects extends Schema.Component {
  collectionName: 'components_array_array_of_objects';
  info: {
    displayName: 'arrayOfObjects';
    description: '';
  };
  attributes: {
    listStackCategory: Attribute.Component<'object.icon-tag', true>;
  };
}

export interface ArrayArrayOfStrings extends Schema.Component {
  collectionName: 'components_array_array_of_strings';
  info: {
    displayName: 'arrayOfStrings';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface ArrayImageList extends Schema.Component {
  collectionName: 'components_array_image_lists';
  info: {
    displayName: 'imageList';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface ObjectIconTag extends Schema.Component {
  collectionName: 'components_object_icon_tags';
  info: {
    displayName: 'iconTag';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface ObjectListStackCategory extends Schema.Component {
  collectionName: 'components_object_list_stack_categories';
  info: {
    displayName: 'listStackCategory';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tag: Attribute.Component<'object.stack-category', true> &
      Attribute.Required;
  };
}

export interface ObjectSimpleObject extends Schema.Component {
  collectionName: 'components_object_simple_objects';
  info: {
    displayName: 'simpleObject';
    icon: '';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ObjectStackCategory extends Schema.Component {
  collectionName: 'components_object_stack_categories';
  info: {
    displayName: 'stackCategory';
  };
  attributes: {
    tag: Attribute.Component<'object.icon-tag', true>;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'array.array-of-objects': ArrayArrayOfObjects;
      'array.array-of-strings': ArrayArrayOfStrings;
      'array.image-list': ArrayImageList;
      'object.icon-tag': ObjectIconTag;
      'object.list-stack-category': ObjectListStackCategory;
      'object.simple-object': ObjectSimpleObject;
      'object.stack-category': ObjectStackCategory;
    }
  }
}
