namespace myapp.Controllers {

    export class HomeController {
        public photos;
        public files


        public deletephoto(id) {
          this.photoService.removePhoto(id);
        }



        constructor(
          private photoService,
        ){
          this.photos = photoService.getPhotos();
        //  this.files = fileService.getFiles();
        }
    }



//filestack code added to this controller
    export class AddPhotoController {
        public photo;
        public file;

        public addPhoto($state, $scope) {

          this.photo.url =this.file.url
          this.photoService.savePhoto(this.photo);
         this.$scope.changeState = function () {
         this.$state.go('home');
};
    }

        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
            console.log(this.file.url);
        }
        constructor(
          private photoService, private filepickerService, private $scope: ng.IScope, public $state
        ) {


        }
    }






    export class EditPhotoController {
        public photo;
        public id;
        public file;

        public editPhoto(){

          this.photo._id = this.id;
          this.photo.url = this.file.url
          this.photoService.savePhoto(this.photo);

        }
//file
        public pickFile() {
            this.filepickerService.pick(
                { mimetype: 'image/*' },
                this.fileUploaded.bind(this)
            );
        }

        public fileUploaded(file) {
            // save file url to database
            this.file = file;
            this.$scope.$apply(); // force page to update
            console.log(this.file.url);
        }
        //file
        constructor(public $stateParams, private photoService, private filepickerService, private $scope: ng.IScope){
          this.id= $stateParams['id'];
        }
    }



}
