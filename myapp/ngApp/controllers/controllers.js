var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(photoService, $state) {
                this.photoService = photoService;
                this.$state = $state;
                this.photos = photoService.getPhotos();
            }
            HomeController.prototype.deletephoto = function (id) {
                this.photoService.removePhoto(id);
                this.$state.go('home');
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddPhotoController = (function () {
            function AddPhotoController(photoService, filepickerService, $scope, $state) {
                this.photoService = photoService;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.$state = $state;
            }
            AddPhotoController.prototype.addPhoto = function ($state) {
                this.photo.url = this.file.url;
                this.photoService.savePhoto(this.photo);
                this.$state.go('home');
            };
            AddPhotoController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            AddPhotoController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
                console.log(this.file.url);
            };
            return AddPhotoController;
        }());
        Controllers.AddPhotoController = AddPhotoController;
        var EditPhotoController = (function () {
            function EditPhotoController($stateParams, photoService, filepickerService, $scope, $state) {
                this.$stateParams = $stateParams;
                this.photoService = photoService;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.$state = $state;
                this.id = $stateParams['id'];
            }
            EditPhotoController.prototype.editPhoto = function ($state) {
                $state;
                this.photo._id = this.id;
                this.photo.url = this.file.url;
                this.photoService.savePhoto(this.photo);
                this.$state.go('home');
            };
            EditPhotoController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            EditPhotoController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            return EditPhotoController;
        }());
        Controllers.EditPhotoController = EditPhotoController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
