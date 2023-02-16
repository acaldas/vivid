import { request } from "graphql-request";
import useSWRInfinite from "swr/infinite";
import Traits from "#/utils/traits.json";
import { useMemo } from "react";

export const traitKeys = Object.keys(Traits).sort() as Array<TraitKey>;
export type TraitKey = keyof typeof Traits;
export type NFTFilters = Record<
  TraitKey,
  { selected: string[]; name: string; values: string[] }
>;
export const defaultFilters = traitKeys.reduce((traits, key) => {
  const trait = Traits[key];
  traits[key] = {
    ...trait,
    selected: new Array<string>(),
  };
  return traits;
}, {} as NFTFilters);

const API_URL = "https://api.thegraph.com/subgraphs/name/acaldas/vividlimited";

const fetcher = (query: string) => {
  return request(API_URL, query);
};

function filtersToQuery(filters: NFTFilters, page = 0) {
  return `{tokens(first: 12, skip: ${
    12 * page
  }, orderBy: tokenID, orderDirection: desc, where: {${traitKeys
    .map((key) => {
      const filter = filters[key];
      return filter.selected.length
        ? `${key}_in: [${filter.selected
            .map((trait) => `"${trait}"`)
            .join(", ")}],`
        : "";
    })
    .join("")}}) {
    tokenID
    image
  }
}`;
}

export default function (filters: NFTFilters) {
  return useSWRInfinite<{ tokens: { tokenID: string; image: string }[] }>(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.tokens) return null;
      return filtersToQuery(filters, pageIndex);
    },
    (test) => {
      console.log(test);
      return fetcher(test);
    }
  );
}
