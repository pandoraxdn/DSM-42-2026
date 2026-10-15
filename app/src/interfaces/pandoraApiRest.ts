export interface UserRespose {
  id_user:    number;
  username:   string;
  email:      string;
  password:   string;
  image:      string;
  location:   string;
  update:     Date;
}

export type RequestLogin = UserRespose | false;
