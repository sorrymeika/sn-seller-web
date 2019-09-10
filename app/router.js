module.exports = app => {
    const { router, controller } = app;
    router.post('/seller/listPlatformSellers', controller.seller.listPlatformSellers);
    router.post('/seller/add', controller.seller.addSeller);
    router.post('/seller/update', controller.seller.updateSeller);
};