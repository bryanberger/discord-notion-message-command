import { Message, createElement, MessageCommandHandler, Button } from "slshx";

const REGEX =
  /https?:\/\/(www\.)?(notion\.so)\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gim;
const ERROR_MSG = `Unfortunately, it doesn't look like this message contains a Notion link.`;

export function notion(): MessageCommandHandler<Env> {
  return async (interaction, env, ctx, message) => {
    const matches = message.content.match(REGEX);
    const rewriteMatches = matches?.map((match) =>
      match.replace(/https?:/, "notion:")
    );
    const returnMessage =
      rewriteMatches && rewriteMatches.length > 0
        ? rewriteMatches.join("\n")
        : ERROR_MSG;

    return <Message ephemeral>{returnMessage}</Message>;
  };
}
