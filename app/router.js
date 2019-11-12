module.exports = app => {
    const { router, controller } = app;
    router.post('/admin/seller/getMySellers', controller.admin.seller.getMySellers);
    router.post('/admin/seller/listPlatformSellers', controller.admin.seller.listPlatformSellers);
    router.post('/admin/seller/add', controller.admin.seller.addSeller);
    router.post('/admin/seller/update', controller.admin.seller.updateSeller);
};