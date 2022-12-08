import { ILoginBody, IResponse, ISignUpBody } from "../interfaces/Auth";

export function getObjectFromLocalstorage(key: string, default_value: string) {
  const value = localStorage.getItem(key);

  if (value === null) {
    return default_value;
  }
  return JSON.parse(value);
}

const isUserAlreadyExist = (newUser: any) => {
  if (getUsers.length) {
    return getUsers?.filter((user: any) => user?.email === newUser?.email)
      ?.length > 0
      ? true
      : false;
  } else return false;
};

const getUserByEmail = (email: string) => {
  if (getUsers.length) {
    const user = getUsers?.find((user: any) => user?.email === email);
    return user;
  } else return null;
};

const isUserPasswordCorrect = (user: any) => {
  const currentUser = getUserByEmail(user.email);
  if (currentUser) {
    if (currentUser.password === user.password) {
      const userInfo = { email: currentUser.email, name: currentUser.name };
      return userInfo;
    }
  } else return null;
};

export const getUsers = getObjectFromLocalstorage("users", "");
export const getCurrentUser = getObjectFromLocalstorage("currentUser", "");
export const isDataForSignUpExist =
  getObjectFromLocalstorage("userDataForSignUp", "") || null;

export const logIn = (body: ILoginBody) => {
  let response: IResponse = { res: false, mess: "" };
  if (isUserAlreadyExist(body)) {
    if (isUserPasswordCorrect(body)) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(isUserPasswordCorrect(body))
      );
      response = { res: true, mess: "You have successfully logined" };
    } else response = { res: false, mess: "Something went wrong, try again!" };
  } else response = { res: false, mess: "Something went wrong, try again!" };
  return response;
};

export const signUp = (body: ISignUpBody) => {
  let response: IResponse = { res: false, mess: "" };
  const isEmailFree: boolean = !isUserAlreadyExist(body);
  if (isEmailFree) {
    const newUsers = [...getUsers, body];
    localStorage.setItem("users", JSON.stringify(newUsers));
    response = { res: true, mess: "You have successfully registered" };
  } else response = { res: false, mess: "User already exist" };
  return response;
};
