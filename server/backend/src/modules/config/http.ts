import { config as root } from "./config";

export const config = root.obj.config;
export const port = (config.num.port ||= Number(process.env.PORT));
