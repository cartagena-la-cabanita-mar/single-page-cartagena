import { execFileSync } from "node:child_process";
import { cpSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const REPO_URL = "https://github.com/cartagena-la-cabanita-mar/single-page-cartagena.git";
const PAGES_BRANCH = "gh-pages";
const SITE_URL = "https://cartagena-la-cabanita-mar.github.io/single-page-cartagena/";
/** GitHub account with admin access to the organization; its token is read from the `gh` CLI. */
const DEPLOY_ACCOUNT = "piiivotsk8";

function run(command: string, args: Array<string>, cwd?: string) {
    execFileSync(command, args, { cwd, stdio: "inherit" });
}

function read(command: string, args: Array<string>): string {
    return execFileSync(command, args, { encoding: "utf8" }).trim();
}

/** Builds the site and force-pushes it to the `gh-pages` branch, which GitHub Pages serves. */
function deploy() {
    run("bun", ["run", "build"]);

    const token = read("gh", ["auth", "token", "--user", DEPLOY_ACCOUNT]);
    const authHeader = `Authorization: Basic ${Buffer.from(`x-access-token:${token}`).toString("base64")}`;
    const workDir = mkdtempSync(join(tmpdir(), "pages-"));

    try {
        cpSync("dist", workDir, { recursive: true });
        writeFileSync(join(workDir, ".nojekyll"), "");

        run("git", ["init", "-q", "-b", PAGES_BRANCH], workDir);
        run("git", ["config", "user.name", DEPLOY_ACCOUNT], workDir);
        run("git", ["config", "user.email", `${DEPLOY_ACCOUNT}@users.noreply.github.com`], workDir);
        run("git", ["add", "-A"], workDir);
        run("git", ["commit", "-q", "-m", `Deploy site ${new Date().toISOString()}`], workDir);
        run(
            "git",
            ["-c", "credential.helper=", "-c", `http.extraHeader=${authHeader}`, "push", "-f", REPO_URL, PAGES_BRANCH],
            workDir,
        );
    } finally {
        rmSync(workDir, { recursive: true, force: true });
    }

    console.log(`Published: ${SITE_URL} (it can take a minute to refresh)`);
}

deploy();
