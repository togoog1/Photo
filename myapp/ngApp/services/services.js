var myapp;
(function (myapp) {
    var Services;
    (function (Services) {
        var PhotoService = (function () {
            function PhotoService($resource) {
                this.$resource = $resource;
                this.PhotoResource = $resource('/photos/:id');
            }
            PhotoService.prototype.savePhoto = function (photo) {
                this.PhotoResource.save(photo);
            };
            PhotoService.prototype.getPhotos = function () {
                return this.PhotoResource.query();
            };
            PhotoService.prototype.removePhoto = function (id) {
                this.PhotoResource.delete({ id: id });
            };
            return PhotoService;
        }());
        Services.PhotoService = PhotoService;
        angular.module('myapp').service('photoService', PhotoService);
    })(Services = myapp.Services || (myapp.Services = {}));
})(myapp || (myapp = {}));
