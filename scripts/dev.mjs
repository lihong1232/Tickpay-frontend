import { spawn } from "node:child_process";

if (!process.allowedNodeEnvironmentFlags.has("--use-system-ca")) {
  console.error(
    "Use Node.js 22.15.0 or newer to enable system CA certificates.",
  );
  process.exit(1);
}

const nodeOptions = process.env.NODE_OPTIONS || "";
const child = spawn("shopify", ["app", "dev", ...process.argv.slice(2)], {
  stdio: "inherit",
  shell: process.platform === "win32",
  env: {
    ...process.env,
    NODE_OPTIONS: `${nodeOptions} --use-system-ca`.trim(),
    TUNNEL_TRANSPORT_PROTOCOL: process.env.TUNNEL_TRANSPORT_PROTOCOL || "http2",
  },
});

child.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});

child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
