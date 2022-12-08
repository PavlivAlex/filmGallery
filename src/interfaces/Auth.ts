export interface IResponse{
    res: boolean;
    mess: string;
}

export interface ILoginBody{
    email: string;
    password: string;
}

export interface ISignUpBody{
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

export interface IAuthUser {
    email: string;
    id: number;
    name: string;
  }