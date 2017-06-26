namespace myapp.Services {
 export class PhotoService {
   public PhotoResource

   public savePhoto(photo) {
     this.PhotoResource.save(photo);
     


}


 public getPhotos(){
   return this.PhotoResource.query();
 }

public removePhoto(id) {
  this.PhotoResource.delete({id: id});
}

public constructor( public $resource)
{
  this.PhotoResource = $resource('/photos/:id')

}


   }



 angular.module('myapp').service('photoService', PhotoService);

}
