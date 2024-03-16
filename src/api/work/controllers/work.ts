"use strict";

/**
 *  work controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::work.work", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const work = await strapi.entityService.findMany("api::work.work", query);

    const sanitizedEntity = await this.sanitizeOutput(work);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
