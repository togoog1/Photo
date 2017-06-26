var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(photoService) {
                this.photoService = photoService;
                this.photos = photoService.getPhotos();
            }
            HomeController.prototype.deletephoto = function (id) {
                this.photoService.removePhoto(id);
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
            AddPhotoController.prototype.addPhoto = function ($state, $scope) {
                this.photo.url = this.file.url;
                this.photoService.savePhoto(this.photo);
                this.$scope.changeState = function () {
                    this.$state.go('home');
                };
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
            function EditPhotoController($stateParams, photoService, filepickerService, $scope) {
                this.$stateParams = $stateParams;
                this.photoService = photoService;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.id = $stateParams['id'];
            }
            EditPhotoController.prototype.editPhoto = function () {
                this.photo._id = this.id;
                this.photo.url = this.file.url;
                this.photoService.savePhoto(this.photo);
            };
            EditPhotoController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            EditPhotoController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
                console.log(this.file.url);
            };
            return EditPhotoController;
        }());
        Controllers.EditPhotoController = EditPhotoController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
