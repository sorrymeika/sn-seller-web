const { Controller } = require("egg");

class SellerController extends Controller {

    async listPlatformSellers() {
        const { ctx } = this;

        const payloadRule = {
            status: { type: 'number', required: false }
        };
        ctx.validate(payloadRule);

        const {
            status,
        } = ctx.request.body;

        const result = await ctx.service.seller.listPlatformSellers({
            status
        });
        ctx.body = result;
    }

    async addSeller() {
        const { ctx } = this;

        const payloadRule = {
            level: { type: 'number', required: true },
            name: { type: 'string', required: true },
            pid: { type: 'number', required: true }
        };
        ctx.validate(payloadRule);

        const {
            name,
            level,
            pid
        } = ctx.request.body;

        const result = await ctx.service.seller.addCate({
            name,
            level,
            pid
        });
        ctx.body = result;
    }

    async updateSeller() {
        const { ctx } = this;

        const payloadRule = {
            name: { type: 'string', required: true },
            id: { type: 'number', required: true }
        };
        ctx.validate(payloadRule);

        const {
            name,
            id
        } = ctx.request.body;

        const result = await ctx.service.seller.updateSeller({
            name,
            id
        });
        ctx.body = result;
    }
}

module.exports = SellerController;