export function getAccessToken() {
    return document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("access_token="))
        ?.split("=")[1];
}