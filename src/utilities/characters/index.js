import Crusaders from "./crusader-characters";
import memoize from "lodash/memoize";

export const lookupCharacter = memoize(id =>
  [Crusaders].reduce((results, characters) => {
    if (characters[id]) {
      return characters[id];
    }

    return results;
  }, undefined)
);
