import express from "express";
import log4js from "log4js";
import fetch from "node-fetch";
import console from "node:console";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import favicon from "serve-favicon";

// deno-lint-ignore ban-ts-comment
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Env {
    // deno-lint-ignore no-explicit-any
    app: any;
    // deno-lint-ignore no-explicit-any
    server: any;

    constructor() {
        // https://expressjs.com/ja/5x/api.html
        this.app = express();
        const mask = process.argv[2];
        const port = process.env.PORT || mask;
        // deno-lint-ignore require-await
        this.server = this.app.listen(port, async function () {
            console.log("listening on port: " + mask);
        });
        // https://expressjs.com/ja/starter/static-files.html
        this.app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
        this.app.use(
            "/bootstrap",
            express.static(path.join(__dirname, "node_modules/bootstrap/dist")),
        );
        this.app.use(express.static("public"));
        this.app.set("view engine", "ejs");
        this.app.use((
            req: {
                // deno-lint-ignore no-explicit-any
                [x: string]: any;
                // deno-lint-ignore no-explicit-any
                ip: any;
            },
            // deno-lint-ignore no-explicit-any
            res: any,
            next: () => void,
        ) => {
            log4js.configure({
                appenders: {
                    newworld: {
                        type: "file",
                        filename: "./logs/newworld.log",
                        maxLogSize: 10 * 1024 * 1024,
                        backups: 5,
                        compress: true,
                    },
                },
                categories: {
                    default: { appenders: ["newworld"], level: "error" },
                },
            });
            const logger = log4js.getLogger();
            logger.level = "debug";

            if (`${req.ip}` == "undefined") {
                const ipAddress = `${req.connection.remoteAddress}`;
                const json_data = "./logs/blacklist_v6.json";

                if (existsSync(`${json_data}`)) {
                    const data = JSON.parse(
                        readFileSync(`${json_data}`, "utf8"),
                    );

                    let sum = 0;
                    // deno-lint-ignore prefer-const
                    let num = 4;

                    for (let i = 1; i <= num; i++) {
                        sum += i;

                        if (`${ipAddress}` == data[`${sum}`]) {
                            res.render("error");
                            return;
                        }
                    }
                } else {
                    console.log("File Not Found " + `${json_data}`);
                }

                logger.debug(`Client IP: ${ipAddress}`);
                next();
            } else {
                const clientIP = req.ip;
                const splittedAddress = `${clientIP}`.split(":");
                const ipAddress = splittedAddress[splittedAddress.length - 1];
                const json_data = "./logs/blacklist_v4.json";

                if (existsSync(`${json_data}`)) {
                    const data = JSON.parse(
                        readFileSync(`${json_data}`, "utf8"),
                    );

                    let sum = 0;
                    // deno-lint-ignore prefer-const
                    let num = 31;

                    for (let i = 1; i <= num; i++) {
                        sum += i;
                        if (`${ipAddress}` == data[`${sum}`]) {
                            res.render("error");
                            return;
                        }
                    }
                } else {
                    console.log("File Not Found " + `${json_data}`);
                }

                logger.debug(`Client IP: ${ipAddress}`);
                next();
            }
        });
    }

    run() {
        this.app.get(
            "/",
            async function (req: { method: string; protocol: string }, res: {
                locals: {
                    // deno-lint-ignore no-explicit-any
                    name: any;
                    // deno-lint-ignore no-explicit-any
                    title: any;
                    // deno-lint-ignore no-explicit-any
                    data: any;
                    // deno-lint-ignore no-explicit-any
                    data_full: any;
                    // deno-lint-ignore no-explicit-any
                    neovim: any;
                    // deno-lint-ignore no-explicit-any
                    jetbrains: any;
                    // deno-lint-ignore no-explicit-any
                    reason: any;
                    // deno-lint-ignore no-explicit-any
                    configuration: any;
                    // deno-lint-ignore no-explicit-any
                    plugins: any;
                    // deno-lint-ignore no-explicit-any
                    ides: any;
                    // deno-lint-ignore no-explicit-any
                    copy: any;
                    // deno-lint-ignore no-explicit-any
                    youtube: any;
                    // deno-lint-ignore no-explicit-any
                    spa: any;
                    // deno-lint-ignore no-explicit-any
                    github: any;
                    // deno-lint-ignore no-explicit-any
                    github_pf: any;
                    // deno-lint-ignore no-explicit-any
                    github_op: any;
                    // deno-lint-ignore no-explicit-any
                    github_us: any;
                    // deno-lint-ignore no-explicit-any
                    github_me: any;
                    // deno-lint-ignore no-explicit-any
                    githubpages: any;
                    // deno-lint-ignore no-explicit-any
                    githubp_pf: any;
                    // deno-lint-ignore no-explicit-any
                    githubp_bd: any;
                    // deno-lint-ignore no-explicit-any
                    githubp_sy: any;
                    // deno-lint-ignore no-explicit-any
                    githubp_old: any;
                    // deno-lint-ignore no-explicit-any
                    gist: any;
                    // deno-lint-ignore no-explicit-any
                    gist_p: any;
                    // deno-lint-ignore no-explicit-any
                    gist_op: any;
                    // deno-lint-ignore no-explicit-any
                    gist_sh: any;
                    // deno-lint-ignore no-explicit-any
                    gist_mix: any;
                    // deno-lint-ignore no-explicit-any
                    author: any;
                    // deno-lint-ignore no-explicit-any
                    spa_full: any;
                    // deno-lint-ignore no-explicit-any
                    spa_dev: any;
                    // deno-lint-ignore no-explicit-any
                    spa_js: any;
                    // deno-lint-ignore no-explicit-any
                    spa_cm: any;
                };
                render: (arg0: string) => void;
            }) {
                try {
                    const controller = new AbortController();
                    const localhost = process.argv[3];
                    const port_number = process.argv[4];
                    const page_num = process.argv[5];

                    const response = await fetch(
                        "http://" + localhost + ":" + port_number + "/" +
                            page_num,
                        {
                            signal: controller.signal,
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        },
                    );
                    if (!response.ok) {
                        throw new Error(
                            `Warning, server status: ${response.status}`,
                        );
                    }

                    const data = await response.json();
                    const jsonString = JSON.stringify(data);
                    const jsonObject = JSON.parse(jsonString);

                    res.locals.name = jsonObject.name;
                    res.locals.title = jsonObject.title;
                    res.locals.data = jsonObject.dtcl;
                    res.locals.data_full = jsonObject.dtcl_full;
                    res.locals.neovim = jsonObject.neovim;
                    res.locals.jetbrains = jsonObject.jetbrain;
                    res.locals.reason = jsonObject.reason;
                    res.locals.configuration = jsonObject.configuration;
                    res.locals.plugins = jsonObject.plugins;
                    res.locals.ides = jsonObject.ides;
                    res.locals.copy = jsonObject.copyright;
                    res.locals.youtube = jsonObject.youtube;
                    res.locals.spa = jsonObject.spa;
                    res.locals.github = jsonObject.github;
                    res.locals.github_pf = jsonObject.github_pf;
                    res.locals.github_op = jsonObject.github_op;
                    res.locals.github_us = jsonObject.github_us;
                    res.locals.github_me = jsonObject.github_me;
                    res.locals.githubpages = jsonObject.githubpages;
                    res.locals.githubp_pf = jsonObject.githubp_pf;
                    res.locals.githubp_bd = jsonObject.githubp_bd;
                    res.locals.githubp_sy = jsonObject.githubp_sy;
                    res.locals.githubp_old = jsonObject.githubp_old;
                    res.locals.gist = jsonObject.gist;
                    res.locals.gist_p = jsonObject.gist_p;
                    res.locals.gist_op = jsonObject.gist_op;
                    res.locals.gist_sh = jsonObject.gist_sh;
                    res.locals.gist_mix = jsonObject.gist_mix;
                    res.locals.author = jsonObject.authors;
                    res.locals.spa_full = jsonObject.spa_full;
                    res.locals.spa_dev = jsonObject.spa_dev;
                    res.locals.spa_js = jsonObject.spa_js;
                    res.locals.spa_cm = jsonObject.spa_cm;

                    if (!response.ok) {
                        throw new Error(
                            `Warning, server status: ${response.status}`,
                        );
                    }
                } catch (error) {
                    console.error("Error: ", error);
                } finally {
                    res.render("index");
                    console.log(req.method + ": " + req.protocol);
                }
            },
        );
    }
}

const environ = new Env();
environ.run();
