import { environment } from "src/environments/environment";

export class Address{
 add = (location.origin === 'http://localhost:4200')?'http://ubitech.xyz/Nursing/':location.origin+'/';
     admin = "http://ubitech.xyz/Nursing/admin/";
     admin_url = "http://ubitech.xyz/Nursing/admin/login";
    api = environment.host+"api/";
    base_url = this.admin+"assets/";
    editoral_img =this. base_url+"editorial_board/";
    pdf_url = this.base_url+"article/pdf/";
    img_url = this.base_url+"article/image/";


}