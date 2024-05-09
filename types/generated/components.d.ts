import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentAboutMeDescription extends Schema.Component {
  collectionName: 'components_content_about_me_descriptions';
  info: {
    displayName: 'about-me-description';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Text & Attribute.Required;
  };
}

export interface ContentSocial extends Schema.Component {
  collectionName: 'components_content_socials';
  info: {
    displayName: 'Social';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
    url: Attribute.String;
  };
}

export interface ContentStringList extends Schema.Component {
  collectionName: 'components_content_string_list';
  info: {
    displayName: 'StringList';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface MediaGalleryBlock extends Schema.Component {
  collectionName: 'components_media_gallery_block';
  info: {
    displayName: 'GalleryBlock';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    images: Attribute.Media & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface MediaImageDescription extends Schema.Component {
  collectionName: 'components_media_image_descriptions';
  info: {
    displayName: 'ImageDescription';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

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

export interface MetaMetaTags extends Schema.Component {
  collectionName: 'components_meta_meta_tags';
  info: {
    displayName: 'meta tags';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    robots: Attribute.Enumeration<
      ['index, follow', 'index, nofollow', 'noindex, nofollow']
    > &
      Attribute.DefaultTo<'index, follow'>;
  };
}

export interface TagCategoryIconLabelTag extends Schema.Component {
  collectionName: 'components_tag-category_icon_label_tags';
  info: {
    displayName: 'IconLabelTag';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface TagCategoryStackCategory extends Schema.Component {
  collectionName: 'components_tag-category_stack_categories';
  info: {
    displayName: 'StackCategories';
    description: '';
    icon: 'layer';
  };
  attributes: {
    tags: Attribute.Component<'tag-category.icon-label-tag', true> &
      Attribute.Required;
    name: Attribute.String & Attribute.Required;
  };
}

export interface TagCategoryStackOverview extends Schema.Component {
  collectionName: 'components_tag-category_stack_overview';
  info: {
    displayName: 'StackOverview';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    stack_category: Attribute.Component<'tag-category.stack-category', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.about-me-description': ContentAboutMeDescription;
      'content.social': ContentSocial;
      'content.string-list': ContentStringList;
      'media.gallery-block': MediaGalleryBlock;
      'media.image-description': MediaImageDescription;
      'media.media-block': MediaMediaBlock;
      'meta.meta-tags': MetaMetaTags;
      'tag-category.icon-label-tag': TagCategoryIconLabelTag;
      'tag-category.stack-category': TagCategoryStackCategory;
      'tag-category.stack-overview': TagCategoryStackOverview;
    }
  }
}
