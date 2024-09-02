import { IS_DOG_UPLOADED } from "./types";

export const setIsDogUploaded = (value) => ({
    type: IS_DOG_UPLOADED,
    payload: value,
});
