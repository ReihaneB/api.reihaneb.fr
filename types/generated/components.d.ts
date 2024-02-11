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
export interface MediaGalleryBlock extends Schema.Component {
  collectionName: 'components_media_gallery_block';
  info: {
    displayName: 'GalleryBlock';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface ObjectIconTag extends Schema.Component {
  collectionName: 'components_object_icon_tags';
export interface MediaMediaBlock extends Schema.Component {
  collectionName: 'components_media_media_block';
  info: {
    displayName: 'MediaBlock';
    icon: '';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface ObjectListStackCategory extends Schema.Component {
  collectionName: 'components_object_list_stack_categories';
export interface TagCategoryIconLabelTag extends Schema.Component {
  collectionName: 'components_tag-category_icon_label_tags';
  info: {
    displayName: 'listStackCategory';
    displayName: 'IconLabelTag';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    tag: Attribute.Component<'object.stack-category', true> &
      Attribute.Required;
    label: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface ObjectSimpleObject extends Schema.Component {
export interface TagCategoryStackCategory extends Schema.Component {
  collectionName: 'components_tag-category_stack_categories';
  info: {
    displayName: 'simpleObject';
    displayName: 'StackCategories';
    description: '';
    icon: 'layer';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    tag: Attribute.Component<'tag-category.icon-label-tag', true>;
    name: Attribute.String;
  };
}

export interface ObjectStackCategory extends Schema.Component {
  collectionName: 'components_object_stack_categories';
export interface TagCategoryStackOverview extends Schema.Component {
  collectionName: 'components_tag-category_stack_overview';
  info: {
    displayName: 'stackCategory';
    displayName: 'StackOverview';
    description: '';
  };
  attributes: {
    tag: Attribute.Component<'object.icon-tag', true>;
    name: Attribute.String;
    name: Attribute.String & Attribute.Required;
    tag: Attribute.Component<'tag-category.stack-category', true> &
      Attribute.Required;
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
      'media.gallery-block': MediaGalleryBlock;
      'media.media-block': MediaMediaBlock;
      'tag-category.icon-label-tag': TagCategoryIconLabelTag;
      'tag-category.stack-category': TagCategoryStackCategory;
      'tag-category.stack-overview': TagCategoryStackOverview;
    }
  }
}
