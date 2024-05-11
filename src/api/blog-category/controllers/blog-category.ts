// TODO: Fix the ts-nocheck when the issue is resolved
// @ts-nocheck
"use strict";

/**
 *  blog-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog-category.blog-category", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const category = await strapi.entityService.findMany("api::blog-category.blog-category", query);

    const sanitizedEntity = await this.sanitizeOutput(category);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
