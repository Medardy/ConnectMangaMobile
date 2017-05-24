// User model based on structure of ConnectManga api at
// https://connectmangas.com/server/api/action/profil/

export interface User {
    username: String;
    password: String;
    email: String;
    address: String;
    latitude: Number;
    longitude: Number;
    img_profil: String;
    date_create: Date;
    date_upd: Date;
    last_login: Date;
}