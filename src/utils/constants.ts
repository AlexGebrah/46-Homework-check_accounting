export const base_url = 'https://webaccounting.herokuapp.com/account';
export const createToken = (login: string, password: string) => `Basic ${btoa(login + ':' + password)}`;

export const findPassword = (token: string, login: string): string | null => {
       if (!token.startsWith('Basic ')) {
        throw new Error('Invalid token format');
    }

    const base64Part = token.slice(6);
    const decoded = atob(base64Part);

    const [decodedLogin, password] = decoded.split(':');

    if (decodedLogin !== login) {
        return null;
    }

    return password;
};