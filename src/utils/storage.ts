const storagePrefix = "agiletect_react_";

const storage = {
    getToken: () => {
        return JSON.parse(
            window.localStorage.getItem(`${storagePrefix}token`) as string,
        );
    },
    setToken: (token: string) => {
        window.localStorage.setItem(
            `${storagePrefix}token`,
            JSON.stringify(token),
        );
    },
    clearToken: () => {
        window.localStorage.removeItem(`${storagePrefix}token`);
    },
};

export default storage;

export const storageRefreshToken = {
    getToken: () => {
        return JSON.parse(
            window.localStorage.getItem(
                `${storagePrefix}refresh_token`,
            ) as string,
        );
    },
    setToken: (token: string) => {
        window.localStorage.setItem(
            `${storagePrefix}refresh_token`,
            JSON.stringify(token),
        );
    },
    clearToken: () => {
        window.localStorage.removeItem(`${storagePrefix}refresh_token`);
    },
};
