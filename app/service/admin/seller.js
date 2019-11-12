const { Service } = require("egg");

const NO_PERMISSION = { success: false, code: 10002, message: '账号无权限' };

class SellerService extends Service {
    getMySellers() {
        const { ctx } = this;
        if (!ctx.accountId) {
            return { ...NO_PERMISSION, message: '请先登录！' };
        }
        return this.app.sellerRPC.invoke('seller.getSellersByAccountId', [ctx.accountId]);
    }

    listPlatformSellers({ status }) {
        return this.app.sellerRPC.invoke('seller.listPlatformSellers', [{ status }]);
    }

    addSeller({ name, pid, level, creator }) {
        return this.app.sellerRPC.invoke('seller.addSeller', [{ name, pid, level, creator }]);
    }

    updateSeller({ name, id, modifyer }) {
        return this.app.sellerRPC.invoke('seller.updateSeller', [{ name, id, modifyer }]);
    }
}

module.exports = SellerService;