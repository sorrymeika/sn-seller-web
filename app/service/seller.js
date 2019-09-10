const { Service } = require("egg");

class SellerService extends Service {

    listPlatformSellers({ status }) {
        return this.ctx.sellerRPC.invoke('seller.listPlatformSellers', [{ status }]);
    }

    addSeller({ name, pid, level, creator }) {
        return this.ctx.sellerRPC.invoke('seller.addSeller', [{ name, pid, level, creator }]);
    }

    updateSeller({ name, id, modifyer }) {
        return this.ctx.sellerRPC.invoke('seller.updateSeller', [{ name, id, modifyer }]);
    }
}

module.exports = SellerService;