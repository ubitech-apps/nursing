import { environment } from 'src/environments/environment';

export class Address {
  admin = environment.host + 'admin/';
  admin_url = environment.host + 'admin/login';
  api = environment.host + 'api/';
  base_url = this.admin + 'assets/';
  editoral_img = this.base_url + 'editorial_board/';
  pdf_url = this.base_url + 'article/pdf/';
  img_url = this.base_url + 'article/image/';
  supplementary = this.base_url + 'supplementary/';
}
