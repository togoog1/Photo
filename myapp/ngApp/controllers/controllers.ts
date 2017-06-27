namespace myapp.Controllers {

    export class HomeController {
        public photos;
        public files


        public deletephoto(id) {
          this.photoService.removePhoto(id);
          this.$state.go('home');
        }



        constructor(
          private photoService, private $state
        ){
          this.photos = photoService.getPhotos();
        //  this.files = fileService.getFiles();
        }
    }



//filestack code added to this controller
    export class AddPhotoController {
        public photo;
        public file;

        public addPhoto($state) {

          this.photo.url =this.file.url
          this.photoService.savePhoto(this.photo);
          this.$state.go('home');

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
          private photoService, private filepickerService, private $scope: ng.IScope, private $state
        ) {


        }
    }






    export class EditPhotoController {
        public photo;
        public id;
        public file;

        public editPhoto($state){$state

          this.photo._id = this.id;
          this.photo.url = this.file.url
          this.photoService.savePhoto(this.photo);
          this.$state.go('home');

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

        }
        //file
        constructor(public $stateParams, private photoService, private filepickerService, private $scope: ng.IScope, public $state){
          this.id= $stateParams['id'];
        }
    }



}
