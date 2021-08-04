import { environment } from "src/environments/environment";

export class Address{
 add = (location.origin === 'http://localhost:4200')?'http://ubitech.xyz/Nursing/':location.origin+'/';
    // admin = "http://ubitech.xyz/Nursing/admin/login";
    api = environment.host+"api/";


}